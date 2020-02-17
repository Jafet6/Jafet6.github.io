let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    salarioINSS = salarioBruto * 0.92
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioINSS = salarioBruto * 0.91
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioINSS = salarioBruto * 0.89
}
else {
    salarioINSS = salarioBruto - 570.88
}

if (salarioINSS <= 1903.98){
    salarioLiquido = salarioINSS
}
else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    salarioLiquido = (salarioINSS * 0.925) + 142.8 
}
else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
    salarioLiquido = (salarioINSS * 0.85) + 354.8 
}
else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
    salarioLiquido = (salarioINSS * 0.775) + 636.13 
}
else {
    salarioLiquido = (salarioINSS * 0.725) + 869.36
}

console.log(salarioINSS)
console.log(salarioLiquido)