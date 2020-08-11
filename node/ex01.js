const modulos = require('./modules');

const msg = () => { console.log( modulos.toUpper("ola!")); }

setInterval(msg,1000);