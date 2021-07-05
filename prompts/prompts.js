#! /usr/bin/env node
const prompts = require("yargs-interactive")();

const generateComponent = (argv, answer) => {
    console.log(answer, argv);
}
const promptQn1 = async argv => {
    let options = {
        interactive: { default: true },
        template: {
            type: "list",
            describe: "Choose any of the templates below",
            choices: ["React app", "React with Redux", "React Redux with Type Script"]
        }
    }
    try {
        answer = await prompts.interactive(options);
        generateComponent(argv, answer);
    }
    catch (error) {
        console.error(error, 'unable to prompt');
    }
}

// export { promptQn1 }
module.exports = {promptQn1};