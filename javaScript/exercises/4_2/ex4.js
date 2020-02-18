n = 7;
let pyramid = [];

for (i = 0; i < n; i++){
    pyramid[i] = " ";
}

for (j = 0; j < n/2; j++){
    pyramid[Math.trunc(n/2) + j] = "*";
    pyramid[Math.trunc(n/2) - j] = "*";
    console.log(pyramid.join(""));
}