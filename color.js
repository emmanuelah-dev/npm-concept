import chalk from 'chalk';
import fs from 'fs';

const fileContent = chalk.blue('This is blue text!') + '\n' +
                    chalk.green('This is green text!') + '\n' +
                    chalk.red('This is red text!');


fs.writeFileSync('colored.txt', fileContent);

console.log(chalk.yellow('File saved! Run this to see colors:'));
console.log('cat colored.txt');



