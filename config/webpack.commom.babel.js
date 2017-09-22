import webpack from 'webpack';
import path from 'path';

const dir = path.resolve(__dirname, '../');

export default {
    entry: {
        app: path.resolve(__dirname, 'src/index.js')//入口文件
    },
    output: {
        publicPath: '/',
        path: path.join(dir, 'dist'),//输出文件的路径
        filename: 'js/[name].[chunkhash].js',//entry里有几个入口文件，这里就有几个js
        chunkFilename: 'js/[name].[chunkhash].js',//按需加载的js
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        option: {
                            presets: ['react', 'es2015', 'stage-0'],
                            plugins: ['transform-decorators-legacy'] //装饰器api支持
                        }
                    }
                ]
            },
            // {
            //     test: /\.(css|less)$/,
            //     use: ['style-loader','css-loader', 'less-loader']//从右往左使用
            // }
        ]
    }
}