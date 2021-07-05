const { exec } = require('child_process');
const npath = require("path");
const { INDEX_JS, STORE_JS, ACTION_JS, REDUCER_JS } = require('./templates/reduxTemplates');

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

    exec("pwd", async (err, stdOut, stdErr) => {
        if (err) {
            console.error("error", err);
            return;
        }
        if (stdErr) {
            console.error("stdErr", stdErr);
            return;
        }
        // stdOut = stdOut.split("\\").slice(2).join("/");
        // console.log(stdOut);
        const homePath = npath.resolve(stdOut);
        // console.log(homePath);

        console.log(homePath);
        // console.log(stdOut);

        // const pathCheck = await checkPath(homePath+"/src/"+argV.p);

        // if(pathCheck){
        //     genFile(homePath+"/src/"+argV.p+".jsx", fc, name, argV);
        // }
        // else{
        //     try{
        //         await generateDir(homePath+"/src/"+argV.p+".jsx");
        //         genFile(homePath+"/src/"+argV.p+".jsx", fc, name, argV);
        //     }
        //     catch(err){
        //         console.error("error in the else block", err);
        //     }
        // }

    })


}

module.exports = createReduxTemplate;