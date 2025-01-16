const stringInicial = "Target Sistemas";

let stringInvertida = "";

for (let i = stringInicial.length - 1; i >= 0; i--) {
    stringInvertida += stringInicial[i];
}

console.log("String inicial:", stringInicial);
console.log("String invertida:", stringInvertida);
