var workspackModel = require('../schema/workspace');

module.exports = {
    insert: function(workspace) {
        var newWorkspackModel = new workspackModel(workspace);
        var insertPromise = new Promise(function(resolve, reject) {
            newWorkspackModel.save(function(err, workspace){
                if (err) {
                    reject(err);
                } else {
                    resolve(workspace);
                }
            });
        });
        return insertPromise;
    },
}