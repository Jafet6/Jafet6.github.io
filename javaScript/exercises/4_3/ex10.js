let n = 6;

function somaAteN(n) {
    let cont = 0;
    for (let i = 0; i <= n; i++){
        cont += i;
    }
    return cont;
}

console.log(somaAteN(n));