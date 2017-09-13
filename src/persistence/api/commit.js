var commitModel = require('../schema/commit');

module.exports = {
    insert: function(commit, callback) {
        var newCommitModel = new commitModel(commit);

        newCommitModel.save(callback);
    },

    find: function(commitId) {
        return commitModel.find({ id: commitId }).exec();
    }
}