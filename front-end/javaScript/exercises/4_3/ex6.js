let array = [-2, -3, -6, -7, -10, -1];

function indiceMenorValor(array){
    let maiorValor = 0;
    for (let indice in array){
        if (array[indice] > array[0]){
            maiorValor = indice;
        } else {
            maiorValor = 0
        }
    }
    return maiorValor;
}

console.log(indiceMenorValor(array));