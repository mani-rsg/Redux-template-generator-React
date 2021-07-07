const ora = require('ora');
const chalk = require('chalk');
const { run } = require('./utils/helper');
const createReactApp = answer => {
    // console.log(answer, 'create react');
    let spinner = ora({ text: 'Creating react app...', spinner: "moon" }).start();
    run(`npx create-react-app ${answer.name}`, (err, stdOut, stdErr) => {

        if (err) {
            spinner.fail(chalk.red.bold('Error Creating React App'))
            console.error(err);
            return;
        }
        // console.log('App created Successfully');
        spinner.stopAndPersist({ symbol: '🦄', text: chalk.green.bold('Happy Coding..!') });
    })
}

module.exports = createReactApp;