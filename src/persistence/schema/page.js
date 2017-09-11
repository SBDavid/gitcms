var mongoose = require('../connection');

var pageSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    content: {}
});

module.exports = mongoose.model('page', pageSchema);