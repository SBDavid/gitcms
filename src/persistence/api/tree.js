var treeModel = require('../schema/tree');

module.exports = {
    insert: function(tree, callback) {
        var newTreeModel = new treeModel(tree);

        newTreeModel.save(callback);
    },
    
    find: function(treeId, callback) {
        treeModel.find({ id: treeId }, callback);
    }
}