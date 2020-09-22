
const { umd } = require('a-webpack-configs');


module.exports = (env) => umd(env, {
    entryPath: './examples/modules/modules.js',
    productionPath: './docs',
    developmentPath: './examples/spa',
    plugins: {
        clean: true,
        babel: true
    }
});
