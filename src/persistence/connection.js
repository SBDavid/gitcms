var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/gitcms', {
    useMongoClient: true,
});

module.exports = mongoose;