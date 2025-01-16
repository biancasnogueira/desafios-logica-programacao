const dados = require('./dados.json');

const valores = dados.map(d => d.valor).filter(valor => valor > 0);

const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);
const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

const diasAcimaDaMedia = dados.filter(d => d.valor > media).length;

console.log("Menor valor:", menorValor);
console.log("Maior valor:", maiorValor);
console.log("Dias acima da média:", diasAcimaDaMedia);
