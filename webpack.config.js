
'use strict';

// var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var path=require('path')
module.exports = {
    entry: {
        main:path.resolve(__dirname , './src/main.js').replace(/\\/g,'/')
    },
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        filename: '[name].js' //打包后输出文件的文件名
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    externals: [
        (function () {
            var entry=path.resolve(__dirname,'./src').replace(/\\/g,'/')
            //定义需要编译的路径
            /*
                *前提须知：externals定义的是如何编译需要"编译的文件里面"的"引用模块语句"
                *如果忽略掉所有引用node_modules文件里面的模块语句
                *就不会把node_modules文件里面的模块打包到编译文件中
                *
                *
            */
            return function (context, request, callback) {
                console.log(`${context}------${request}`)
                if(request.indexOf(entry)<0){
                    if(context.replace(/\\/g,'/').indexOf(entry)<0||request.indexOf('./')<0){
                        console.log(`${context}------${request}`)
                        console.log(context!=entry)
                        return callback(null, "require('" + request + "')");
                    }
                }
                // return callback(null, "require('" + path.resolve(context,request).replace(/\\/g,'/') + "')");
                //if(path.resolve(context,request).replace(/\\/g,'/').indexOf(entry)==-1){
                //    console.log(`${context}------${request}`)
                //    console.log(path.resolve(context,request).replace(/\\/g,'/'))
                //}else{
                //    console.log(`${context}------${request}`)
                //}
                return callback();
            };
        })()
    ]
}
