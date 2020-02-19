let roman = "XIX";
let parametrosRoman = {
    I:1,
    V:5,       
    X:10,    
    L:50,    
    C:100,  
    D:500,   
    M:1000, 
};


function romanToNum(roman) {
    let arrayRoman = roman.split("");
    let arrayRomanLength = arrayRoman.length
    if (parametrosRoman.arrayRoman[arrayRoman.length - 1] > parametrosRoman.arrayRoman[arrayRoman.length -2]) {
        return true;
    }
    
    
};

console.log(parametrosRoman.X);
console.log(romanToNum(roman));