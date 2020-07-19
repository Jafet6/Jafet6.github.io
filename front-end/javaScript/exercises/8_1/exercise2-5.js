const string = `Tryber x aqui
Tudo bem?`;

const changeStr = (str, name) => {
  let arrayStr = str.split(" ");
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] === "x"){
      arrayStr[i] = name;
    }
  }
  return arrayStr.join(" ");
}

const skills = ["JavaScript", "HTML", "CSS", "Python", "Tênis"];

const concatenate = (func, skl) => {
  const aphabeticalOrder = skl.sort();
  return `${func}
  Minhas cinco principais habilidades são:
  ${aphabeticalOrder[0]}
  ${aphabeticalOrder[1]}
  ${aphabeticalOrder[2]}
  ${aphabeticalOrder[3]}
  ${aphabeticalOrder[4]}`
}

console.log(concatenate(changeStr(string, "Jafet"), skills))