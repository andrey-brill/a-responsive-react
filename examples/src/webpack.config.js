
const { spa } = require('a-webpack-configs');


module.exports = (env) => spa(env, {

    entryPath: './examples/src/examples.jsx',
    productionPath: './docs',
    developmentPath: './examples/spa',

    title: 'RCC',
    scripts: [
        /modules/
    ],

    plugins: {
        scss: true,
        react: true,
        copy: true
    }
});

