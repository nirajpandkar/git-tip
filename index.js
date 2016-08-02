#!/usr/bin/env node
var chalk = require('chalk');
var tips = require('./tips.json');
var uniqueRandomArray = require('unique-random-array');

var randomGitTip = uniqueRandomArray(tips); //returns a function
var randomTip = randomGitTip(); //returns a random object(title,tip) from tips.json
var randomTipTitle = randomTip.title;   //Title of the tip
var randomTipCommand = randomTip.tip;       //Actual command
console.log(chalk.bold.yellow("***************************"));
console.log(chalk.bold.yellow("* Git Tip of the Terminal *"));
console.log(chalk.bold.yellow("***************************"));
console.log(chalk.bold.cyan(randomTipTitle));
console.log(chalk.bold.green(randomTipCommand));