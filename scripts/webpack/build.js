// Core
const webpack = require('webpack');
const chalk = require('chalk');

// Config
const getProdConfig = require('./config/webpack.prod');

const compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
    if (error) {
        console.error(error.stack || error);

        if (error.details) {
            console.error(error.details);
        }

        return;
    }

    const info = stats.toString({
        colors:     true,
        hash:       true,
        version:    true,
        timings:    true,
        env:        true,
        chunks:     false,
        modules:    false,
        children:   false,
        publicPath: true,
        reasons:    true,
        source:     false,
    });

    console.log(info);
    console.log(chalk.greenBright('✓ Build completed.'));

    if (stats.hasErrors()) {
        console.log(chalk.redBright('→ Error!'));
        console.error(info);
    }

    if (stats.hasWarnings()) {
        console.log(chalk.yellowBright('→ Warning!'));
        console.warn(info);
    }
});