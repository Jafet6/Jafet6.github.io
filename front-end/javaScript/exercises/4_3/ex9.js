let array = [2, 3, 2, 3, 8, 1, 2];

function maisRepetido(array){
    let numeroMaisRep = [];
    let contador = 0;
    for (indice in array){
        for (indice1 in array){
            if (array[indice] === array[indice1]){
                contador = contador + 1;
                numeroMaisRep[indice] = contador;
            }
        }
        contador = 0;
    }
    console.log (numeroMaisRep);
    return array[numeroMaisRep.indexOf(Math.max(...numeroMaisRep))];
}

console.log(maisRepetido(array));
