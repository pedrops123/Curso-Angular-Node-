const modulo_express = require('express');
const server = modulo_express();
const router = require('./ex05_routes')

var port = 3000;

server.use('/api',router)


server.listen(port,() => console.log(`Escutando a porta ${port}`))


