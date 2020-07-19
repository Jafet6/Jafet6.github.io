let array = [4, 6, 7, 10, 0, -3];

function indiceMenorValor(array){
    let menorValor = 0;
    for (let indice in array){
        if (array[indice] < array[0]){
            menorValor = indice;
        } else {
            menorValor = 0
        }
    }
    return menorValor;
}

console.log(indiceMenorValor(array));