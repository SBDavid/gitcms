var projectModel = require('./persistence/schema/project');

var project1 = new projectModel({ name: 'Silence' });

projectModel.find({ name: /^tangjiawei/ }, function (err, p) {
    if (err) return console.error(err);
    console.info('save', p);
  });