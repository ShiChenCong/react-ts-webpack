import webpack from 'webpack'
import Merge from 'webpack-merge';
import * as commonWebpack from './webpack.common.babel.js';

const devWebpack = {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        hot: true,
        open : true,
        port: 9000,
        contentBase: "./",
        historyApiFallback: true,//搭配browserHistory
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
}

export default Merge(devWebpack,commonWebpack.default);