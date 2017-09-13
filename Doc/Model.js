var page = {
    id: hash,
    createTime: 123444444,
    content: {

    }
}

var tree = {
    id: hash,
    createTime,
    items:[{
        id: hash,
        name: 'name',
        path: '', // url路径
        type: 'page|tree'
    }]
}

var commit = {
    id: hash,
    parentId: hash,
    crateTime: 121212,
    treeId: hash,
    committer: {},
    message: 'message'
}

var project = {
    refs: [{
        commitId: hash,
        name: 'name'
    }],
    head: hash,
    test: hash,
    name: '项目名称',
    rootPath: '访问的根路径',
    staged: [{
        committer: String,
        wsId: String,
    }], // 暂存的修改区
}

var workspace = {
    useremail: String,
    projectName: '',
    refName: '',
    type: 'head:test:normal',
    commit: {
        id: hash,
        parentId: hash,
        crateTime: 121212,
        treeId: hash,
        committer: {},
        message: 'message',
        tree: {
            id: hash,
            createTime,
            items:[{
                id: hash,
                name: 'name',
                path: '', // url路径
                type: 'page',
                page: {}
            }, {
                id: hash,
                name: 'name',
                path: '', // url路径
                type: 'tree',
                tree: {
                    id: hash,
                    createTime,
                    items:[{
                        id: hash,
                        name: 'name',
                        path: '', // url路径
                        type: 'page',
                        page:{}
                    }]
                }
            }]
        }
    }
}