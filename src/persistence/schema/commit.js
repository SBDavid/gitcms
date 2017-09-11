var mongoose = require('../connection');

var commitSchema = mongoose.Schema({
    id: String,
    parentId: String,
    createTime: {
        type: Date,
        default: Date.now
    },
    treeId: String,
    committer: {},
    message: String
});

module.exports = mongoose.model('tree', commitSchema);