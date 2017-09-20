const webpack = require('webpack')
    , path = require('path')
    , vueConf = require('./configs/vue-loader.config')
    , imgConf = require('./configs/images-config')
    , htmlPlgConf = require('./configs/html-plugin-config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = path.join(__dirname, '..', 'src')
const app = path.join(src, 'app')

module.exports = {
    devtool: 'source-map',

    entry: {
        app: path.join(src, 'main.js'),
        vendor: Object.keys(require('../package').dependencies).filter(d => d !== 'font-awesome')
    },

    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        modules: [path.resolve(__dirname, '..', 'node_modules')],
        alias: {
            _root: src,
            _app: app,
            _store: path.join(src, 'store'),
            _common: path.join(app, 'common'),
            _modules: path.join(app, 'modules'),
            _components: path.join(app, 'components'),
            _services: path.join(app, 'services'),
            _views: path.join(app, 'views'),
            _util: path.join(app, 'utils'),
            _config: path.join(src, 'config'),
            _assets: path.join(src, 'assets'),
            _img: path.join(src, 'assets', 'images'),
            _fonts: path.join(src, 'assets', 'fonts'),
            _sass: path.join(src, 'assets', 'scss'),
            _sass_config: path.join(src, 'assets', 'scss', 'config'),
            _sass_comp: path.join(src, 'assets', 'scss', 'components'),
            _sass_modules: path.join(src, 'assets', 'scss', 'modules'),
            _npm: path.join(__dirname, '..', 'node_modules')
        }
    },
    module: {
        noParse: /(promise| setAsap)\.js$/,
        rules: [
            {
                enforce: 'pre',
                test: /.(vue|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConf
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loaders: imgConf
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)(\?v=[a-z0-9=\.]+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(htmlPlgConf),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        })
    ]
}
