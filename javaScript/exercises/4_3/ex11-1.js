let word = "Trybe";
let ending = "be";

function verificaFimPalavra (word, ending){
    let letters = ending.length;
    for (indice in ending) {
        if (ending[indice] === word[word.length - letters - indice]){
            return true;
        } else {
            return false
        }
    };
}

console.log(verificaFimPalavra(word, ending));