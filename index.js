#! /usr/bin/env node
const { program } = require('commander')
const { promptQn1 } = require('./prompts/prompts');

program
    .command('create')
    .description('Generate react template')
    .requiredOption('-n, --name <appName>', 'React app name')
    .option('-p, --path <path>', 'Path at which the template need to be created. By default templates will be created in src folder')
    .action(promptQn1)

program.parse();
