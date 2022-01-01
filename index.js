#!/usr/bin/env node

import chalk from "chalk";
const log = console.log;

log(`console.log(message);
            ^

ReferenceError: message is not defined
    at index.js:13:32
    ${chalk.gray('at ModuleJob.run (node:internal/modules/esm/module_job:185:25)')}
    at async Promise.all (index 0)
    ${chalk.gray('at async ESMLoader.import (node:internal/modules/esm/loader:281:24)')}
    ${chalk.gray('at async loadESM (node:internal/process/esm_loader:88:5)')}
    ${chalk.gray('at async handleMainPromise (node:internal/modules/run_main:65:12)')}`);

setTimeout(() => {
  log('');
  log('');
  log(chalk.green('Just kidding!'));
  log('');
  log('');

  setTimeout(() => {
    log(`${chalk.bgBlue('                                                              ')}
${chalk.white.bgBlue('                           Cowation                           ')}
${chalk.bgBlue('                                                              ')}
${chalk.gray('Windows  VS Code  JavaScript  TypeScript  Java  Lua  Swift  C#\nC++  Node.JS  Express  Svelte  React  Git Bash  My PC')}

Welcome to my profile. Sometimes, I'm online for very short 
periods of time. Any activity from me in the past 4 weeks can
be considered a miracle.

Thanks for running my portfolio package!`);
  }, 500);
}, 1000);