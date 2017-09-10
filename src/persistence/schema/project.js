var mongoose = require('../connection');

var projectSchema = mongoose.Schema({
    refs: [], // 分支
    head: { type: String, default: "" }, // 主分支指针
    test: { type: String, default: "" }, // 测试分支指针
    name: String, // 项目名
    rootPath: String, // 访问的根路径
    staged: [], // 暂存的修改区
});

module.exports = mongoose.model('project', projectSchema);