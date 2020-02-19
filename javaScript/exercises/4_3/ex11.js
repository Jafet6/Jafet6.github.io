let word = "Trybe";
let ending = "be";

function verificaFimPalavra (word, ending){
    if (word.slice(-2) === ending) {
        return true;
    } else {
        return false;
    }
};

console.log(verificaFimPalavra(word, ending));