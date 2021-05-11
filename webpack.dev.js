/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-27 13:17:50
 * @LastEditors: Andy
 * @LastEditTime: 2021-05-06 14:44:01
 */
// webpack.dev.js
const path = require('path');
const { merge } = require('webpack-merge');  // 引入webpack-merge功能模块
const common = require('./webpack.common.js'); // 引入webpack.common.js
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = merge(common,{
    mode: 'development',
    devServer: {
        contentBase: resolve("./src/"),// 本地服务器所加载文件的目录
        publicPath: '/',
        host: '127.0.0.1',
        port: 3000, 
        stats: {
            colors: true
        },
        inline: true, // 文件修改后实时刷新
        historyApiFallback: true, //不跳转
        hot: true // 热更新
    },
});