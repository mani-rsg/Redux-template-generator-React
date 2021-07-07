const fs = require('fs');
const fsPromises = require('fs/promises');
const ora = require('ora');
const chalk = require('chalk');
const { SRC_ARR, ACTION_ARR, REDUCER_ARR } = require('./templates/reduxTemplates');
const { run } = require('./utils/helper');

const createTemplate = (path, filesArr, spinnerText) => {
    return new Promise((resolve, reject) => {
        let spinner = ora({text: `Creating ${spinnerText}`, spinner: "line"}).start();
        
        fs.mkdir(path, { recursive: true }, error => {
            if (error) {
                console.error(error, `unable to create ${path}`);
                spinner.fail(chalk.redBright(`Error creating ${spinnerText}`));
                //todo: resolve / reject
                return;
            }
            // console.info(`${path} created`);
            spinner.succeed(chalk.greenBright(`${spinnerText} Created`));

            let writeArr = [];
            filesArr.forEach(file => {
                let spinner = ora({ text: `Creating ${file.name}`, spinner: "line" }).start();
                writeArr.push(fsPromises.writeFile(`${path}/${file.name}`, file.template).then(() => {
                    // console.info(`${file.name} created successfully`);
                    spinner.succeed(chalk.greenBright(`${spinnerText}/${file.name} Created`));
                }, error => {
                    spinner.fail(chalk.redBright(`Error creating ${spinnerText}/${file.name}`));
                    console.error(error, `Unable to create ${file.name}`);
                }));
            })

            Promise.all(writeArr).then(() => {
                resolve({ created: true });
            }, error => {
                console.error(error, `unable to create files in ${path}`);
                //todo: resolve / reject
            })
        })
    })
}
const genReduxTemplate = answer => {
    let currentPath = process.cwd();
    answer.path = answer.path || 'src';
    // console.log(currentPath); 

    const templateArr = [{
        path: `${currentPath}/${answer.name}/${answer.path}`,
        filesArr: SRC_ARR,
        spinnerText: `/${answer.path}`
    }, {
        path: `${currentPath}/${answer.name}/${answer.path}/actions`,
        filesArr: ACTION_ARR,
        spinnerText: `/actions`
    }, {
        path: `${currentPath}/${answer.name}/${answer.path}/reducers`,
        filesArr: REDUCER_ARR,
        spinnerText: `/reducers`
    }]

    let promiseArr = [];

    templateArr.forEach(template => {

        promiseArr.push(createTemplate(template.path, template.filesArr, template.spinnerText).then(() => {
            // console.log(`${template.path} template created successfully`);
        }, error => {
            console.error(error, `Unable to create template ${template.path}`);
        }))
    })

    Promise.all(promiseArr).then(() => {
        // console.log("Created files successfully");
        ora(chalk.green.bold('Happy Coding..!')).stopAndPersist({ symbol: '🦄' });
    }, error => {
        console.error(error, `unable to create React with Redux template`);
    })
}
const createReduxTemplate = answer => {
    /**
       answer: {
              name:"myFirstApp"
              path: 'src',
              template: 'React with Redux'
          }
    */
    // console.log(answer, 'redux');
    let spinner = ora({ text: 'Creating react app...', spinner: "moon" }).start();
    // console.log(spinner)
    run(`npx create-react-app ${answer.name}`, (err, stdOut, stdErr) => {
        if (err) {
            spinner.fail(chalk.red.bold('Error Creating React App'))
            console.error(err, 'error');
            return;
        }

        spinner.succeed(chalk.greenBright('React App Created'));

        genReduxTemplate(answer)
    })
}

module.exports = createReduxTemplate;