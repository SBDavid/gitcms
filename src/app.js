var pageApi = require('./persistence/api/page');
var projectApi = require('./persistence/api/project');
var treeApi = require('./persistence/api/tree');
var commitApi = require('./persistence/api/commit');

function app() {  }

app.prototype.checkout = function(projectName, refName, callback) {
    var self = this;
    var project = null;

    projectApi.find(projectName).then(function(projects){
        if(projects.length === 0) {
            callback({
                success: false,
                message: 'project not found'
            })
            return;
        }
        if(projects[0].refs.findIndex(ref => {return ref.name === refName})) {
            callback({
                success: false,
                message: 'refName not found'
            })
            return;
        }
        project = projects[0].toObject();
        var commitId = projects[0].refs[projects[0].refs.findIndex(ref => {return ref.name === refName})].commitId;
        return commitApi.find(commitId);
    })
    .then(function(commits){

        if(commits.length === 0) {
            callback({
                success: false,
                message: 'commit not found'
            })
            return;
        }
        project.commit = commits[0].toObject();
        callback({
            success: true,
            result: project,
        });
    })
}

module.exports = app;