#!/usr/bin/env node
const chalk = require('chalk');
const tips = require('./tips.json');
const uniqueRandomArray = require('unique-random-array');
const meow = require('meow');

module.exports={
    random:randomTip,
    all:allTips,
    keyword:keywordTips
};

function randomTip(){
    var arrayOfTips = uniqueRandomArray(tips); //returns a function
    return arrayOfTips(); //returns a random object(title,tip) from tips.json
}

function keywordTips(inputKeyword){
    var arr = [];
    for(var i=0;i<tips.length;i++){
        if(tips[i].title.toLowerCase().indexOf(inputKeyword)!=-1){
            //if the given inputKeyword is found in any of the tips, append that object to arr
            arr = arr.concat(tips[i]);
        }
    }
    return arr;
}

function allTips(){
    return tips;
}

const cli = meow('\n Usage ' +
                 '\n $ git-tip [options] ' +
                 '\n Options ' +
                 '\n     --help      Provides usage help (Shows the current page) ' +
                 '\n     --all       Gives all the git tips ' +
                 '\n     <keyword>   Gives the git tips consisting of the keyword ' +
                 '\n Examples ' +
                 '\n     $ git-tip bypass ' +
                 '\n    1. Bypass pre-commit and commit-msg githooks ' +
                 '\n     => git commit --no-verify ' +
                 '\n      $ git-tip ' +
                 '\n      Git Tip of the Terminal ' +
                 '\n     ------------------------- ' +
                 '\n     Saving current state of tracked files without commiting ' +
                 '\n     => git stash ');



if(cli.input[0]!=undefined){
    inputKeyword = cli.input[0].toLowerCase();    //the command line argument
    var keywordtips = keywordTips(inputKeyword);
    for(var i=0;i<keywordtips.length;i++){
        console.log(i+1+". "+chalk.bold.cyan(keywordtips[i].title));
        console.log("=> "+chalk.bold.green(keywordtips[i].tip+"\n"));
    }

}
else if(cli.flags.all){
    var alltips = allTips();
    for(i=0;i<alltips.length;i++){
        console.log(chalk.bold.cyan(i+1+". "+alltips[i].title));
        console.log(chalk.bold.green("=> "+alltips[i].tip+"\n"));
    }
}
else if(cli.input[0]==undefined){
    tip = randomTip();
    console.log(chalk.bold.yellow(" Git Tip of the Terminal "));
    console.log(chalk.bold.yellow("-------------------------"));
    console.log(chalk.bold.cyan(tip.title));
    console.log(chalk.bold.green("=> "+tip.tip));
}
