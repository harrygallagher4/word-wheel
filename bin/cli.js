#! /usr/bin/env node
const chalk = require('chalk');
const { wordsFromWord }= require('../');
const scan = require('../scan-dict.js');
const words = require('../words.json');

const arg = process.argv[2];

if (arg && (arg.toLowerCase() == '-s' || arg.toLowerCase() == '--scan')) {
  scan();
} else if (!arg || !arg.length || !(arg.length == 4)) {
  console.error('Word must be 4 characters');
} else {

  let result = wordsFromWord(arg);

  result.forEach(v => {
    if (words[v.toLowerCase()]) {
      console.log(chalk.green(v));
    } else {
      console.log(chalk.red(v));
    }
  });
}

