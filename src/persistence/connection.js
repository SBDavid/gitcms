var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gitcms', {
    useMongoClient: true,
});

module.exports = mongoose;