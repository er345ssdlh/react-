/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 11:28:32
 * @LastEditors: Andy
 * @LastEditTime: 2021-05-06 15:02:15
 */
//webpackage.prod.js

const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 打包前先清除旧的dist
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // js文件压缩
// const CompressionPlugin = require("compression-webpack-plugin"); // gzip压缩
module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    mode: 'production',
    devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    plugins: [
        new CleanWebpackPlugin(),  // 打包前先清除旧的dist
        // webpack.optimize.uglifyJsPlugin({}) webpack4以上被废除 使用下边的
        new UglifyJsPlugin({//js压缩
            uglifyOptions: {
                compress: {
                    drop_debugger: true,
                    drop_console: true,  //生产环境自动删除console
                },
                warnings: false,
            },
            sourceMap: false,
            parallel: true,//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        }),
    ]
})