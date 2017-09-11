/* var projectModel = require('./persistence/schema/project');

var project1 = new projectModel({
    name: 'projectNname',
    rootPath: 'rootPath'
});

project1.save(function(err){
    if (err) {
        console.info(err);
    }
    else {
        console.info('ok')
    }
}) */

/* project */

/* var projectApi = require('./persistence/api/project');

projectApi.insert({
    name: 'test',
    rootPath: 'root'
}, function(err, project){
    if(err) {
        console.error(err);
    }
    else {
        console.info(project);
    }
});

projectApi.find('test', function(err, project){
    if(err) {
        console.error(err);
    }
    else {
        console.info(project);
    }
}); */

var pageApi = require('./persistence/api/page');

pageApi.insert({
    content: {
        test: 'hai'
    }
}, function(err, project){
    if(err) {
        console.error(err);
    }
    else {
        console.info(project);
    }
});