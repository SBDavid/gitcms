var pageModel = require('../schema/page');
var sha1 = require('node-sha1');


module.exports = {
    insert: function(page, callback) {
        var newPageModel = new pageModel(page);

        newPageModel.id = sha1(JSON.stringify(page));

        newPageModel.save(callback);
    }
}