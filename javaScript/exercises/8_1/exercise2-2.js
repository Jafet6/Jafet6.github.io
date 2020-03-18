
const longestWord = (str) => {
  const splited = str.split(" ");
  let longestWordPosition = 0;
  for (let i = 0; i < splited.length; i++) {
    if (splited[i].length > splited[longestWordPosition].length){
      longestWordPosition = i;
    }
  }
  return splited[longestWordPosition];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

