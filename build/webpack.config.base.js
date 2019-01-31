const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//样式文件分别打包
const ExtractTextPluginCss = new ExtractTextPlugin('css/[name]/[name]-one.css');
const ExtractTextPluginScss = new ExtractTextPlugin('css/[name]/[name]-two.css');
const ExtractTextPluginLess = new ExtractTextPlugin('css/[name]/[name]-three.css');
const utils = require('./utils');

module.exports = {
    entry: utils.entries(),
    output: {
        path: path.resolve(__dirname, "../dist"),//编译输出的文件目录绝对路径
        filename: "js/[name].js",//文件名
        publicPath: "./"//引入资源文件的前缀公共路径
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.scss'],
        alias: {
            "@": path.join(__dirname, "..", "src")
        }
    },
    module: {//loader加载执行顺序从右往左
        rules: [
            {
                test: /\.js|jsx$/,
                loader: "eslint-loader",
                enforce: "pre",//强制预加载检查资源文件
                exclude: /node_modules/,
                options: {
                    fix: false,//是否自动修改不符合eslint规则的目标文件（小心使用）
                    cache: false,//是否缓存检查结果。该选项有助于对全局编译减少eslint校验时间
                    formatter: require("eslint-friendly-formatter"),//eslint结果输出的格式化
                    emitError: true,//加载程序根据eslint错误是否自动调整错误报告
                    emitWarning: false,//加载程序根据eslint警告是否自动调整错误报告
                    quiet: true,//加载程序是否只处理和报告错误而忽略警告
                    failOnWarning: false,//是否因任何eslint警告而阻断模块编译
                    failOnError: true,//是否因任何eslint错误而阻断模块编译
                    outputReport: false,//是否将eslint校验错误写入文件
                }
            },
            {
                test: /\.js|jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ExtractTextPluginCss.extract({
                    use: [
                        {
                            loader: "css-loader",
                            // options: {importLoaders: 1}//1代表css-loader后还需要几个loader
                        },
                        {
                            loader: "px2rem-loader",
                            options: {
                                remUnit: 40//设计稿/10
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {plugins: [require("autoprefixer")("last 100 versions")]}
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPluginScss.extract({
                    use: [
                        {
                            loader: "css-loader",
                            // options: {importLoaders: 1}
                        },
                        {
                            loader: "px2rem-loader",
                            options: {
                                remUnit: 40//设计稿/10
                            }
                        },
                        {
                            loader: "sass-loader"
                        },
                        {
                            loader: 'postcss-loader',
                            options: {plugins: [require("autoprefixer")("last 100 versions")]}
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPluginLess.extract({
                    use: [
                        {
                            loader: "css-loader",
                            // options: {importLoaders: 2}
                        },
                        {
                            loader: "px2rem-loader",
                            options: {
                                remUnit: 40//设计稿/10
                            }
                        },
                        {
                            loader: "less-loader"
                        },
                        {
                            loader: 'postcss-loader',
                            options: {plugins: [require("autoprefixer")("last 100 versions")]}
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "fonts/[name].[ext]"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "image/[name].[ext]"
                }
            },
        ]
    }
};