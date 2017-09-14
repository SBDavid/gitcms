var pageApi = require('../persistence/api/page');
var projectApi = require('../persistence/api/project');
var treeApi = require('../persistence/api/tree');
var commitApi = require('../persistence/api/commit');

function innerCommend() {  }

innerCommend.prototype.getFullTree = function(treeId, callback) {
    var self = this;
    var tree = null;

    function isTreeFullyBuild(tree) {
        return tree.items.filter(item => {
            return item.item === undefined || Object.getOwnPropertyNames(item.item).length ===0
        }).length === 0
    }

    function getTree(root, treeId, cb) {
        treeApi.find(treeId).then(function(trees) {
            if (trees.length === 0) {
                callback({
                    success: false,
                    message: 'tree not found'
                })
                return;
            }

            root = trees[0].toObject();
            // 如果是空的树，直接返回
            if (root.items.length === 0) {
                throw({
                    isEnd: true
                })
            }
            // 如果不为空查询page和子树
            var promises = root.items.map(item => {
                if (item.type === 'page') {
                    return pageApi.find(item.id);
                } else {
                    return treeApi.find(item.id);
                }
            })

            return Promise.all(promises);
        })
        .then(function(objs){
            for (let i= 0; i < objs.length; i ++) {
                root.items[i].item = objs[i];
                if(root.items[i].type === 'tree') {
                    root.items[i].tree = {};
                    getTree(root.items[i].tree, root.items[i].id, function() {
                        if (isTreeFullyBuild(root)) {
                            cb(root);
                        }
                    })
                }
            }
            if (isTreeFullyBuild(root)) {
                cb(root);
            }
        })
        .catch(function(error) {
            // 跳出promise链
            if(error.isEnd) {
                return;
            }
            throw error;
        })  
    }

    getTree(tree, treeId, callback);
}

module.exports = innerCommend;