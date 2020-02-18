n = 7;
tree = [];

for (let i = 0; i < n; i++){
    tree[i] = " ";
}

for (let j = 0; j < (n/2); j++){
    tree[Math.trunc(n/2) + j] = "*";
    tree[Math.trunc(n/2) - j] = "*";  
    console.log(tree);
    if (j > 0 && j < (n/2)){
        tree[Math.trunc(n/2)] = " ";
        tree[Math.trunc(n/2) - j] = " ";
        tree[Math.trunc(n/2) + j] = " ";
        console.log(tree);
    } 
}

