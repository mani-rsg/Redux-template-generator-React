#! /usr/bin/env node
const prompts = require("yargs-interactive")();

const createReactApp = require("../generators/createReact");
const createTypescriptTemplate = require("../generators/reactTypescript");
const createReduxTemplate = require("../generators/reactWithRedux");

const generateTemplate = {
    "React app": createReactApp,
    "React with Redux": createReduxTemplate,
    "React Redux with Typescript": createTypescriptTemplate
}
const promptQn1 = async () => {
    let options = {
        interactive: { default: true },
        template: {
            type: "list",
            describe: "Choose any of the templates below",
            choices: ["React app", "React with Redux", "React Redux with Typescript"]
        }
    }
    try {
        answer = await prompts.interactive(options);
        generateTemplate[answer.template](answer);
    }
    catch (error) {
        console.error(error, 'unable to prompt');
    }
}

module.exports = { promptQn1 };