custoBruto = 10;

imposto = 1.2;

custoImposto = (custoBruto * imposto);

valorDeVenda = 50;

lucro = (valorDeVenda - custoImposto);

if ((custoImposto || imposto || custoBruto || valorDeVenda) < 0){
    console.log("Erro: Informação inválida");
}
else{
    console.log(1000 * lucro);
}




