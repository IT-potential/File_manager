const fs = require('fs');
const path = require('path');
const fileManagerPath = path.resolve(process.cwd());

function lsContents() {
  fs.readdir(fileManagerPath, {withFileTypes: true}, (err, files) => {
    if (err) {
      console.log('Error reading directory:', err);
    } else {
      const directories = [];
      const filesList = [];

      files.forEach((file) => {
        if (file.isDirectory()) {
          directories.push(file);
        } else {
          filesList.push(file);
        }
      });

      let index = 0;

      directories.sort((a,b) => a.name.localeCompare(b.name));
      filesList.sort((a,b) => a.name.localeCompare(b.name));

      console.log('Ind  \ Name         \        Type');

      directories.forEach((dir) => {
        // const fileType = file.isDirectory() ? 'dir' : 'file';
        const paddedIndex = String(index + 1).padEnd(4);
        const paddedName = dir.name.padEnd(20);
        const paddedType = 'dir'.padEnd(4);
        console.log(`${paddedIndex} \ ${paddedName} \ ${paddedType}`);
        index++;
      })
      
      files.forEach((file) => {
        // const fileType = file.isDirectory() ? 'dir' : 'file';
        const paddedIndex = String(index + 1).padEnd(4);
        const paddedName = file.name.padEnd(20);
        const paddedType = 'file'.padEnd(4);
        console.log(` ${paddedIndex} \ ${paddedName} \ ${paddedType}`);
        index++;
      })
    }
  })
}

module.exports = lsContents;