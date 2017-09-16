var mongoose = require('../connection');

var workspaceSchema = mongoose.Schema({
    useremail: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    refName: {
        type: String,
        default: Date.now
    },
    commit: {}
});

module.exports = mongoose.model('workspace', workspaceSchema);