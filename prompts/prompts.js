#! /usr/bin/env node
const inquirer = require('inquirer');

const createReactApp = require("../generators/createReact");
const createTypescriptTemplate = require("../generators/reactTypescript");
const createReduxTemplate = require("../generators/reactWithRedux");

const generateTemplate = {
    "React app": createReactApp,
    "React with Redux": createReduxTemplate,
    "React with Typescript": createTypescriptTemplate
}
const promptQn1 = async (args) => {
    let questions = [{
        type: 'list',
        name: 'template',
        message: 'Choose any of the templates below',
        choices: ["React app", "React with Redux", "React with Typescript"],
        default: 1
    }]
    try {
        answer = await inquirer.prompt(questions);
        generateTemplate[answer.template]({...answer, ...args});
    }
    catch (error) {
        console.error(error, 'unable to prompt');
    }
}

module.exports = { promptQn1 };