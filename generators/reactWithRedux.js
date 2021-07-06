const fs = require('fs');
const fsPromises = require('fs/promises');
const { SRC_ARR, ACTION_ARR, REDUCER_ARR } = require('./templates/reduxTemplates');
const { run } = require('./utils/helper');

const createTemplate = (path, filesArr) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, { recursive: true }, error => {
            if (error) {
                console.error(error, `unable to create ${path}`);
                //todo: resolve / reject
                return;
            }
            console.info(`${path} created`);

            let writeArr = [];
            filesArr.forEach(file => {
                writeArr.push(fsPromises.writeFile(`${path}/${file.name}`, file.template).then(() => {
                    console.info(`${file.name} created successfully`);
                }, error => console.error(error, `Unable to create ${file.name}`)));
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
    console.log(currentPath);

    const templateArr = [{
        path: `${currentPath}/${answer.name}/${answer.path}`,
        filesArr: SRC_ARR
    }, {
        path: `${currentPath}/${answer.name}/${answer.path}/actions`,
        filesArr: ACTION_ARR
    }, {
        path: `${currentPath}/${answer.name}/${answer.path}/reducers`,
        filesArr: REDUCER_ARR
    }]

    let promiseArr = [];

    templateArr.forEach(template => {
        promiseArr.push(createTemplate(template.path, template.filesArr).then(() => {
            console.log(`${template.path} template created successfully`);
        }, error => {
            console.error(error, `Unable to create template ${template.path}`);
        }))
    })

    Promise.all(promiseArr).then(() => {
        console.log("Created files successfully");
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
    console.log(answer, 'redux');
    run(`npx create-react-app ${answer.name}`, (err, stdOut, stdErr) => {
        if (err) {
            console.error(err, 'error');
            return;
        }
        // console.log(stdOut);
        genReduxTemplate(answer)
    })
}

module.exports = createReduxTemplate;