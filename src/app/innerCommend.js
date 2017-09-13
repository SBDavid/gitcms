var pageApi = require('../persistence/api/page');
var projectApi = require('../persistence/api/project');
var treeApi = require('../persistence/api/tree');
var commitApi = require('../persistence/api/commit');

function innerCommend() {  }

innerCommend.prototype.getFullTree = function(treeId, callback) {
    var tree = null;
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


        })
        .then(function(objs){
            if (objs === 'page') {
                root.page = page;
            }
            if (objs === 'tree') {
                getTree(root.tree, objs.treeId, function() {
                    if(x) {
                        cb();
                    }
                })
            }

            if (x) {
                cb();
            }
        })
    }
}

module.exports = innerCommend;