var mongoose = require('../connection');

var commitSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    parentId: String,
    createTime: {
        type: Date,
        default: Date.now
    },
    treeId: {
        type: String,
        required: true
    },
    committer: {},
    message: String
});

module.exports = mongoose.model('commit', commitSchema);