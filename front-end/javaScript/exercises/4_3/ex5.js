let palavra = "arara";

function palidromo(palavra) {
    if (palavra.split("").reverse().join("") === palavra) {
        return true;
    } else {
        return false;
        }
    }

console.log(palidromo(palavra));