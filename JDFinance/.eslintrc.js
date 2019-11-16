module.exports = {
    root: true, // 找到配置规则文件时，不再查找其他配置规则文件
    extends: [
        "eslint:recommended", // 使用eslint推荐的规则
        "plugin:vue/recommended" // 使用eslint-plugin-vue插件推荐的规则
    ],
    "parser":"vue-eslint-parser", // 使用用户配置的解析器
    "parserOptions":{
        "ecmaVersion": 6
    },
    // 全局检测以下关键字忽略不报eslint错误
    "globals":{
        "console": false,
        "document": false,
        "location": false,
        "window": false
    },
    // 覆盖插件的规则
    rules: {
        "no-trailing-spaces": "error", // 不允许行行尾添加空白
        "require-unicode-regexp": "off", // 使用Unicode的正则表达式时，需要添加u标志位
        "vue/html-indent": ["error", 4], // 4个空格作为indent
    }
}
