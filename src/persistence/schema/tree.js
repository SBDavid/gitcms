var mongoose = require('../connection');

var treeSchema = mongoose.Schema({
    id: String,
    createTime: {
        type: Date,
        default: Date.now
    },
    items: []
});

module.exports = mongoose.model('tree', treeSchema);