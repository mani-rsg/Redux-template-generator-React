#! /usr/bin/env node
const yargs = require("yargs")
const { promptQn1 } = require('./prompts/prompts');
// import { promptQn1 } from './prompts/prompts.js';
// yargs.version("2.0.2");

yargs.command({
    command: "gt",
    describe: "Generate react template",
    builder: {
        p: {
            describe: "Path where the template should to be created",
            demandOption: true,
            type: "string"
        },
        c: {
            describe: `Create a class component`,
            demandOption: false,
            type: "boolean"
        }
    },
    handler: argv => promptQn1(argv)
})

yargs.parse();