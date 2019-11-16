// 引入node.js的path模块
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './app/js/main.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"), // 所有来自 dist/ 目录的文件作为提供内容的目录
        compress: true, // 一切服务都启用gzip 压缩
        port: 9000 // 占用的服务端口
    },
    resolve: {
        // 创建别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 出现runtime-only模板编译出错时使用。用 webpack 1 时需用 'vue/dev/vue.common.js'
            'css': path.resolve(__dirname, 'app/css/'),
            'core': path.resolve(__dirname, 'app/js/core/'),
            'public': path.resolve(__dirname, 'app/js/public/'),
            'img':path.resolve(__dirname,'app/img/')
        },
        // 忽略文件名后缀
        extensions: ['.js']
    },
    module: {
        // 关于模块配置
        rules: [
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.html$/, // test是匹配条件，匹配对应文件的正则表达式
                loader: "html-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]', // 配置class名生成的标识符(ident)
                        camelCase: true // 以驼峰化式命名导出类名
                    },
                    // 在生产环境下需要需要使用ExtractTextPlugin将所有的css文件抽离到独立的css文件，在页面header使用link标签引入而不是分散各个 style引入
                    loaders:  {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader?minimize!px2rem-loader?remUnit=75&remPrecision=8', // 1rem=1根元素html的font-size=35px,精确到小数点后8位。minimize开启css压缩
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        }),
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader?minimize!px2rem-loader?remUnit=75&remPrecision=8!sass-loader',
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        })
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] // 串行解析，从sass-loader解析再到css-loader,最后到style-loader。顺序不能乱
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name:'images/[name].[hash:6].[ext]'
                    }
                }]
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2)$/, // 处理字体文件
                use:'url-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html' // 根据提供的HTML模板来生成HTML文件
        }),
        new CleanWebpackPlugin(['dev'], { // 匹配删除的文件是dev文件夹所有的文件
            root: __dirname,  //根目录，指webpack配置文件所在的路径。与前面['dev']合并起来就是webpack所在路径下的dev文件夹
            verbose: true,   //开启在控制台输出信息
            dry: false   //启用删除文件
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "production"
            }
        }),
        new ExtractTextPlugin("style.css"),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    output: {
        filename: 'js/[name].min.js', // 打包输出的文件名[name]代表entry里的app
        // path是node.js的模块，resolve代表相对路径，__dirname是node提供的环境变量，代表当前路径。这里的当前路径是app文件夹。整句的意思是在当前路径app下新建dist文件夹，把打包输出的文件放进去
        path: path.resolve(__dirname, 'dist')
    }
}
