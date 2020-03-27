
const path = require('path');


const cwd = path.resolve(process.cwd(), 'dev')

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(cwd, 'src/dev.jsx'),
    },
    devServer: {
        contentBase: path.join(cwd, 'app'),
        watchContentBase: true,
        publicPath: '/build/'
    },
    output: {
        filename: '_dev.js',
        path: path.join(cwd, 'app/build')
    },
    module: {
        rules: [
            {
              test: /.jsx$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', "@babel/preset-react" ]
                }
              }
            }
          ]
    }
};
