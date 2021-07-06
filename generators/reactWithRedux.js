const fs = require('fs');
const fsPromises = require('fs/promises');
const { exec } = require('child_process');
const npath = require("path");
const { SRC_ARR, ACTION_ARR, REDUCER_ARR } = require('./templates/reduxTemplates');

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
const createReduxTemplate = answer => {
    console.log(answer, 'redux');
    /**
     * {
            _: [ 'gt' ],
            p: '/src',
            interactive: true,
            '$0': 'rtg',
            template: 'React with Redux'
        }
     */

    let currentPath = process.cwd();
    console.log(currentPath);

    const templateArr = [{
        path: `${currentPath}/${answer.p}`,
        filesArr: SRC_ARR
    }, {
        path: `${currentPath}/${answer.p}/actions`,
        filesArr: ACTION_ARR
    }, {
        path: `${currentPath}/${answer.p}/reducers`,
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

module.exports = createReduxTemplate;