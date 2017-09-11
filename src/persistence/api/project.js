var projectModel = require('../schema/project');

module.exports = {

    insert: function (project, callback) {
        if (!project) {
            throw new Error('至少需要一个参数');
        }
        if (!project.hasOwnProperty('name')) {
            throw new Error('缺少必填参数：project.name');
        }
        if (!project.hasOwnProperty('rootPath')) {
            throw new Error('缺少必填参数：project.rootPath');
        }

        var newProject = new projectModel(project);
        newProject.save(callback);
    },

    find: function(projectName, callback) {
        projectModel.find({
            name: projectName
        }, callback);
    }
}