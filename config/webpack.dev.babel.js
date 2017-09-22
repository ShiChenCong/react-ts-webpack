import webpack from 'webpack'
import Merge from 'webpack-merge';
import * as commonWebpack from './webpack.commom.babel.js';

const devWebpack = {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        hot: true,
        historyApiFallback: true,//搭配browserHistory
        contentBase: "./",
    },
    plubings: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
}

export default Merge(commonWebpack, devWebpack)