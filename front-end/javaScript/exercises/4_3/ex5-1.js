let palavra = "Jafet";

function pali(palavra){
    for (i in palavra){
        if (palavra[i] === (palavra[palavra.length - 1 - i])) {
            return true;
        } else{
            return false;
        }
    }
};

console.log(pali(palavra));
console.log(palavra[palavra.length -1]);
console.log(palavra[0]);

