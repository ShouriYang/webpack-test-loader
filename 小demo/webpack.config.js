const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry:{
        app : path.join(__dirname,'src/index.js')
    },
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    devServer:{
        hot: true,
        host: '0.0.0.0',
        port: '3000',
        overlay: true
    },
    module:{
      rules:
      [
          {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname,"node_modules"),
        use: ['babel-loader']
      }, 
    ]
    },
    plugins:[
        new HtmlPlugin({
            filename: 'index.html', //文件名
            template: path.join(__dirname,'src/index.html')  //打包来源文件
        })
    ]
}