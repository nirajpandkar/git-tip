#!/usr/bin/env node
var chalk = require('chalk');
var tips = require('./tips.json');
var uniqueRandomArray = require('unique-random-array');

var randomGitTip = uniqueRandomArray(tips);
var randomTip = randomGitTip();
var randomTipTitle = randomTip.title;
var randomTipTip = randomTip.tip;
console.log("***************************");
console.log("* Git Tip of the Terminal *");
console.log("***************************");
console.log(chalk.bold.green(randomTipTitle));
console.log(chalk.bold.cyan(randomTipTip));