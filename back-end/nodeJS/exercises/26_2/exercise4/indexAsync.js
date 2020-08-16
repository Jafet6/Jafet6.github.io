const util = require('util');
const realine = require('readline');
const fs =  require('fs');
const path = require('path');

const readFile = util.promisify(fs.readFile);

const questions = (quest) => {
  const rl = realine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(quest, (anwser) => {
      rl.close();
      resolve(anwser);
    });
  });
};

const startQuestions = async () => {
  const file = await questions('Which file do you want do read?');
  try {
    const content = await readFile(path.join(__dirname, file), 'utf8')
    console.log(content);

    const word = await questions('Which word do you want to replace: ');
    const replaceWord = await questions('Which word do you want to put in place?');
    const newStr = content.replace(new RegExp(word, 'g'), replaceWord);
    console.log(newStr);

    const newFileName = await questions('What is the name of the new file?');
    fs.writeFile(path.join(__dirname, newFileName), newStr, { flag: 'wx' }, (err) => {
      if(err) console.log('Error saving file');
      console.log('File saved successfully')
    });
    
  } catch (err) {
    console.log(err.message);
  }
};

startQuestions();
