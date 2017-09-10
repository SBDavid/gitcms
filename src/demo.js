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

var projectApi = require('./persistence/api/project');

/* projectApi.insert({
    name: 'test',
    rootPath: 'root'
}, function(err, project){
    if(err) {
        console.error(err);
    }
    else {
        console.info(project);
    }
}); */

projectApi.find('test', function(err, project){
    if(err) {
        console.error(err);
    }
    else {
        console.info(project);
    }
});