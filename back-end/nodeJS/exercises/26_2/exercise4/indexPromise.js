const fs = require('fs');
const readline = require('readline');
const util = require('util');

const readFile = util.promisify(fs.readFile)

const question = (quest) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(quest, (anwser) => {
      rl.close()
      resolve(anwser);
    });
  });
}

question('Which file do you want do read?')
  .then((file) => {
    readFile(file, 'utf8', (err, content) => {
      if (err) return console.log('Error choosing file, try another');
      console.log(content);

      question('Which word do you want to replace: ')
      .then((word) => {

        question('Which word do you want to put in place?')
          .then((replaceWord) => {
            const newStr = content.toString('utf8').replace(new RegExp(word, 'g'), replaceWord);
            console.log(newStr);

            question('What is the name of the new file?')
            .then((newFileName) => {
              fs.writeFile(newFileName, newStr, { flag: 'wx' }, (err) => {
                if(err) console.log('Error saving file');
                console.log('File saved successfully')
              })
            })
          });
      })
    }) 
  })
