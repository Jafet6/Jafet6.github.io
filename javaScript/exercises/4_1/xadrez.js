peca = "bispo".toLowerCase();

switch (peca) {
    case "piao":
        console.log("frente");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "cavalo":
        console.log("L");
        break;
    case "torre":
        console.log("frente");
        break;
    case "rei":
        console.log("todas direções");
        break;
    case "rainha":
        console.log("todas direções");
        break;
    default:
        console.log("Erro: não é uma peça de xadrez");

}