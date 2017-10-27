import webpack from 'webpack';
import path from 'path';
import Merge from 'webpack-merge';
import commonWebpack from './webpack.common.babel.js';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


const proWebpack = {
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
        new CleanWebpackPlugin( //每次打包，删除之前生成的文件
            ['js', 'imgs'], {
                root: path.resolve(__dirname, '../dist'),
                verbose: true,
                exclude: ['css', 'favicon.ico']
            }),
    ]
}

export default Merge.smart(commonWebpack, proWebpack);