
const path = require('path');


const cwd = path.resolve(process.cwd(), 'dev')

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(cwd, 'global/global.js'),
    },
    output: {
        filename: '_global.js',
        path: path.join(cwd, 'app/build')
    },
};
