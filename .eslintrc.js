module.exports = {
    root: true,
    // 环境，这里可以设置环来做区别判断
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    // 使用的扩展库
    // "extends": ["airbnb"],
    // 解析器用于解析代码
    "parser": "babel-eslint",
    // 解析器配置
    "parserOptions": {
        "ecmaVersion": 2018,//指定ECMAScript版本
        "sourceType": "module",//设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        //额外语言特性
        "ecmaFeatures": {
            "globalReturn": false,//是否允许在全局作用域下使用return语句
            "jsx": true,//是否启用JSX
        }
    },
    // 可以全局使用变量
    "globals": {
        "Babel": true,
        "React": true
    },
    // 第三方插件
    "plugins": [
        "react"
    ],
    // 规则配置
    "rules": {


    }
};
