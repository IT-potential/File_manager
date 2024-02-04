const readline = require('readline');
const path = require('path');
const os = require('os');
const fs = require('fs');
const fileManagerPath = path.resolve(process.cwd());
const lsContents = require('./ls');


const parseArgs = (name) => {
 const param = `--${name}`;
  for (const arg of process.argv) {
      if (arg.startsWith(param)) {
         return arg.split('=')[1]
      }
      console.log(arg);
  };
};
console.log(`Welcome to the File Manager, ${parseArgs('username')}!`);

printCurrentWorkingDirectory();
process.chdir(os.homedir());
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function printCurrentWorkingDirectory() {
  console.log(`You are currently in ${fileManagerPath}`);
}

function handleInput(input) {
  if (input === '.exit') {
    console.log(`Thank you for using File Manager, ${parseArgs('username')}, goodbye!`);
    r1.close();
  } else {
    console.log('Received command:', input);
    printCurrentWorkingDirectory();
  }
}

r1.prompt();
r1.on('line', handleInput);

// const command = process.argv[2];
r1.question('enter command> ', (command) => {
  if (command === 'ls') {
    lsContents();
  }
  r1.close();
})

