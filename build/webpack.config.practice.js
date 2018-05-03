const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')
const merge = require('webpack-merge')
const devServer = {
    port: 1002,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    open: true,
    hot: true
}
const defaultPlugins=[
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: "development"
        }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
]
let config
config = merge(baseConfig, {
    entry:path.join(__dirname,'../practice/index.js'),
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    //import Vue from 'vue'
    resolve:{
        alias:{
            'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
        }
    },
    devServer,
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ])
})
module.exports = config