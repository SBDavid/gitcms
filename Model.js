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
        id: hash,
        commitId: hash
    }],
    head: hash
}