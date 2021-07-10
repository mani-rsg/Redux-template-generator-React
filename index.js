#! /usr/bin/env node
const { program } = require('commander')
const { promptQn1 } = require('./prompts/prompts');

program.version("1.0.1")

program
    .command('g')
    .description('Generate react template')
    .requiredOption('-n, --name <appName>', 'React app name')
    .action(promptQn1)


program.parse();
