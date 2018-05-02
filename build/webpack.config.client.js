const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')
const isDev = process.env.NODE_ENV === 'development'
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')
const merge = require('webpack-merge')
const devServer = {
    port: 1001,
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
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
]
let config
if (isDev) {
    config = merge(baseConfig, {
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
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
    config=merge(baseConfig,{
        output:{
            filename:'[name].[chunkhash:8].js'
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use: ExtractPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins:defaultPlugins.concat([
            new ExtractPlugin('styles.[chunkhash:8].css')
        ])
    })
}
module.exports = config