import webpack from 'webpack'
import Merge from 'webpack-merge';
import commonWebpack from './webpack.common.babel.js';

const devWebpack = {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        hot: true,
        open : true,
        port: 9000,
        contentBase: "dist",
        historyApiFallback: true,//搭配browserHistory
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        // 热加载插件 配合webpack-dev-server
		new webpack.HotModuleReplacementPlugin(),
    ]
}

export default Merge(devWebpack,commonWebpack);