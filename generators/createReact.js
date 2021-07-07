const ora = require('ora');
const chalk = require('chalk');
const { createApp } = require('./utils/helper');
const createReactApp = answer => {
    // console.log(answer, 'create react')

    createApp(answer.name, success => {
        if (success) ora(chalk.green.bold('Happy Coding..!')).stopAndPersist({ symbol: '🦄' });
    });
}

module.exports = createReactApp;