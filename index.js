#! /usr/bin/env node
const { program } = require('commander')
const { promptQn1 } = require('./prompts/prompts');

program.version("1.0.0")

program
    .command('create')
    .description('Generate react template')
    .requiredOption('-n, --name <appName>', 'React app name')
    .action(promptQn1)


program.parse();
