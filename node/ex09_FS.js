const fs = require('fs');

const listaArquivos = fs.readdirSync(__dirname);

listaArquivos.forEach(r => console.log(r));

//console.log(listaArquivos);