var pageApi = require('./persistence/api/page');
var projectApi = require('./persistence/api/project');
var treeApi = require('./persistence/api/tree');
var commitApi = require('./persistence/api/commit');

/* var project1 = new projectModel({
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
})  */

/* project */

/*
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

/* 插入page */

/* pageApi.insert({
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

pageApi.find('d632e6f53116e8b45ac72bcff4752797daccd9cc').then(function(obj){
    console.info(1, obj);
    return pageApi.find('d632e6f53116e8b45ac72bcff4752797daccd9cc');
}).then(function(obj){
    console.info(2, obj);
});
*/


/* 插入tree */

/* treeApi.insert({
    id: 'd632e6f53116e8b45ac72bcff4752797daccd9c1',
    items: [{
        id: 'd632e6f53116e8b45ac72bcff4752797daccd9cc',
        name: 'pageName',
        path: 'pagePath',
        type: 'page'
    }]
},function(err, obj){
    if(err) {
        console.error(err);
    }
    else {
        console.info(obj);
    }
}) */

/* 插入commit */

/* commitApi.insert({
    id: 'd632e6f53116e8b45ac72bcff4752797daccd9c2',
    treeId: 'd632e6f53116e8b45ac72bcff4752797daccd9c1',
    committer: {
        email: 'billl89@126.com',
        username: 'davidtang'
    },
    message: '初次提交'
},function(err, obj){
    if(err) {
        console.error(err);
    }
    else {
        console.info(obj);
    }
}) */

var app = require('./app');

(new app()).checkout('demo','master',function(obj){
/*     for(prop in obj.result){
        console.info(prop)
    } */
    /* console.info(obj.result.toObject()) */
    console.info(obj)
})