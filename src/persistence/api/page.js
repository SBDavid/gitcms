var pageModel = require('../schema/page');

module.exports = {
    insert: function(page, callback) {
        var newPageModel = new pageModel(page);

        newPageModel.save(callback);
    },

    find: function(pageId) {
        return pageModel.find({ id: pageId }).exec();
    }
}