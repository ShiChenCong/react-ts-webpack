import webpack from 'webpack';
import path from 'path';
import Merge from 'webpack-merge';
import commonWebpack from './webpack.common.babel.js';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


const proWebpack = {
    module: {
        rules: [
            {
                test: /\.css|less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 'less-loader', {
                            loader: 'postcss-loader',
                            options: { plugins() { return [require('autoprefixer')()] } }
                        },
                    ],
                    publicPath:'../'
                }) //单独提取出来css  如果css太多打包到js里 js会很大 建议生产环境使用 提取出来的css 无法热更新
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({//压缩代码，去掉警告和log
             sourceMap: true,
             compress: {
                warnings: false,
                drop_console: true
              }
            }),//压缩代码
        new ExtractTextPlugin({//提取出css，配合上面rules中的css loader配置
            filename: 'css/[name].css',
            allChunks: true,
            disable: false
        }),
        new CleanWebpackPlugin( //每次打包，删除之前生成的文件
            ['js', 'imgs'], {
                root: path.resolve(__dirname, '../dist'),
                verbose: true,
                exclude: ['css', 'favicon.ico']
            }),
    ]
}

export default Merge.smart(commonWebpack, proWebpack);