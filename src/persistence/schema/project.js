var mongoose = require('../connection');

var projectSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('project', projectSchema);