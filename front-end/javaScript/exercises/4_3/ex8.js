let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
    let nome = "";
    for (let indice in array){
        if (array[indice].length > nome.length) {
            nome = array[indice];
        }
    }
    return nome;
}

console.log(maiorNome(array));