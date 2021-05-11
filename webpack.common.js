/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-27 13:17:43
 * @LastEditors: Andy
 * @LastEditTime: 2021-05-06 14:44:10
 */
//webpackage.common.js

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
console.log('当前环境',process.env.NODE_ENV)
module.exports = {
    entry: resolve("/src/index.js"), // 入口文件
    output: {
        path: resolve("/dist"), //打包后的文件存放的地方
        // filename: "bundle.js" //打包后输出文件的文件名
    },
    devtool: 'source-map',  // 代码调试
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'], //   引入可以省略后缀
        mainFiles: ["index"],// 解析目录时要使用的文件名 比如 index.wasm index.mjs..就可以省略了
        alias: { // 减少使用别名提高编译速速
            '@': resolve("./src"),
          },
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/, // jsx文件的正则
                include: /src/, // 必须处理的
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: { // 注意use选择如果有多项配置，可写成这种对象形式
                    loader: 'babel-loader',// 所使用的loader
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            { 
                test: /\.css$/,  // 加载css 的loader
                use: ['style-loader', 'css-loader'] 
            },
            { 
                test: /\.(scss|sass)$/, // 加载scss 的loader
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    //坑 https://blog.csdn.net/Hreticent/article/details/111321607
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200000, // 200k以下
                            name: 'img/[name].[hash:7].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: resolve("/public/index.html"),
            filename: 'index.html',
            inject: true
        }),
        new webpack.BannerPlugin('刘宗怡版权所有，翻版必究'),  // new一个插件的实例 
        new webpack.HotModuleReplacementPlugin() // 热更新插件
    ]
};