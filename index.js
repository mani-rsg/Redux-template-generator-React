const yargs = require('yargs')
// import { promptQn1 } from './prompts/prompts';

yargs.version("2.0.2");

yargs({
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
    handler: argv => { console.log(argv) }
})

yargs.parse();