const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which file do you want do read?', (file) => {
  fs.readFile(file, 'utf8', (err, content) => {
    if (err) return console.log('Error choosing file, try another');
    console.log(content);
    rl.question('Which word do you want to replace: ', (word) => {
      rl.question('Which word do you want to put in place?', (replaceWord) => {
        const newStr = content.replace(new RegExp(word, 'g'), replaceWord);
        console.log(newStr);
        rl.question('What is the name of the new file?', (newFileName) => {
          fs.writeFile(newFileName, newStr, { flag: 'wx' }, (err) => {
            if(err) console.log('Error saving file');
            console.log('File saved successfully')
            rl.close()
          });
        });
      });
    });
  });
});
