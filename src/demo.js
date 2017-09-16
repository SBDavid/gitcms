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
    
    id: 'd632e6f53116e8b45ac72bcff4752797daccd9c4',
    content: {
        test: 'world'
    }
}, function(err, project){
    if(err) {
        console.error(err);
    }
    else {
        console.info(project);
    }
});  */

/* pageApi.find('d632e6f53116e8b45ac72bcff4752797daccd9cc').then(function(obj){
    console.info(1, obj);
    return pageApi.find('d632e6f53116e8b45ac72bcff4752797daccd9cc');
}, function(err){
    console.error(err);
}).then(function(obj){
    console.info(2, obj);
}).catch(function(err){
    console.error('catch', err);
}); */

/* 插入tree */

/* treeApi.insert({
    id: 'd632e6f53116e8b45ac72bcff4752797daccd9c5',
    items: [{
        id: 'd632e6f53116e8b45ac72bcff4752797daccd9c4',
        name: 'page4',
        path: 'page4',
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

var app = require('./app/app');

var a = new app();

a.checkout('demo', 'master', 'billl89@126.com').then(function(response){
    console.info(response);
}).catch(err => {
    console.error(err);
});
