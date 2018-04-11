//webpack在node环境上的
const path = require('path');

module.exports = {
    entry:{
        app:'./app/js/main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module:{
        loaders:[
            {
                test:/\.html/,
                loader:'html-loader'
            }, {
                test:/\.vue/,
                loader:'vue-loader'
            }, {
                test:/\.scss/,
                //支持对一个文件用多个loader解析，顺序是从右到左！也就是先用scss解析后用css解析，再用style解析
                loader:'style-loader!css-loader!sass-loader'
            }
        ],
    },
    plugins:[],
    output:{
        filename: '[name].min.js',
        //__dirname是node中的一个变量，表示当前路径
        path: path.resolve(__dirname,'dist')
    }

}
