const { spawn } = require('child_process');
const ora = require('ora');
const chalk = require('chalk');
module.exports = {
    createApp: (appName, callback) => {
        let spinner = ora({
            text: '', spinner: {
                "interval": 80,
                "frames": [
                    "-",
                    "\\",
                    "|",
                    "/"
                ]
            }
        }).start();

        const child = spawn('npx', ['create-react-app', `${appName}`]);

        child.stdout.on('data', data => {
            console.log(chalk.cyanBright.bold(`${data}`));
        })

        child.stderr.on('data', data => {
            console.log(chalk.redBright(`stderr: ${data}`));
        })

        child.on('error', error => {
            console.log(chalk.redBright(`error: ${error}`));
        })

        child.on('exit', (code, signal) => {
            if (code) {
                console.log(chalk.redBright(`process exit with code: ${code}`));
                spinner.fail(chalk.red.bold('Error Creating React App'));
                callback(false);
                return;
            }

            if (signal) {
                console.log(chalk.redBright(`process killed with signal: ${signal}`));
                spinner.fail(chalk.red.bold('Error Creating React App'));
                callback(false);
                return;
            }

            spinner.succeed(chalk.greenBright('React App Created'));
            callback(true);
        })
    }
};