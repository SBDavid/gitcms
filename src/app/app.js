var pageApi = require('../persistence/api/page');
var projectApi = require('../persistence/api/project');
var treeApi = require('../persistence/api/tree');
var commitApi = require('../persistence/api/commit');
var workspaceApi = require('../persistence/api/workspace');
var innercommend = require('./innerCommend');

var innerCommend = new innercommend();

function app() {  }

app.prototype.checkout = function(projectName, refName, useremail) {
    var self = this;
    var project = null;

    var checkoutPromise = new Promise(function(resolve, reject) {
        projectApi.find(projectName).then(function(projects){
            if(projects.length === 0) {
                reject({
                    success: false,
                    message: 'project not found'
                })
            }
            if(projects[0].refs.findIndex(ref => {return ref.name === refName})) {
                reject({
                    success: false,
                    message: 'refName not found'
                })
                return;
            }
            project = projects[0].toObject();
            delete project._id;
            project.projectName = projectName;
            project.refName = refName;
            project.useremail = useremail;
            var commitId = projects[0].refs[projects[0].refs.findIndex(ref => {return ref.name === refName})].commitId;
            return commitApi.find(commitId);
        })
        .then(function(commits){
    
            if(commits.length === 0) {
                reject({
                    success: false,
                    message: 'commit not found'
                })
                return;
            }
            project.commit = commits[0].toObject();
            return new Promise(function(resolve) {
                innerCommend.getFullTree(project.commit.treeId, function(tree) {
                    project.commit.tree = tree;
                    resolve(project);
                })
            });
        })
        .then(function(workspace) {
            return workspaceApi.insert(workspace);
        })
        .then(function(workspace) {
            resolve({
                success: true,
                workspace: workspace
            });
        })
    });

    return checkoutPromise;
}

module.exports = app;