const ora = require('ora');
const chalk = require('chalk');
const { createApp } = require('./utils/helper');

const createTypescriptTemplate = answer => {
    createApp(answer.name, success => {
        if (success) ora(chalk.green.bold('Happy Coding..!')).stopAndPersist({ symbol: '🦄' });
    }, true);
}



module.exports = createTypescriptTemplate;