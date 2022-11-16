const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    module: {
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|)$/i,
                type: 'asset/resource',
                generator:{
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                  interpolate: 'require'
                }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
}