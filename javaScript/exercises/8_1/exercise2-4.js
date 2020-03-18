const changeStr = (str, name) => {
  let arrayStr = str.split(" ");
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] === "x"){
      arrayStr[i] = name;
    }
  }
  return arrayStr.join(" ");
}
const string = `Tryber x aqui
Tudo bem?`;

console.log(changeStr(string, "Jafet"));