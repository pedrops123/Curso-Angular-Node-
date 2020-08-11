const modulo_express = require('express');
const server = modulo_express();
// Http possui metodo  listen porem considerar do express 
const http = require('http');
var port = 3000;

// Metodo GET
server.get('/',(req, res)=>{
    res.send("<h1> Teste </h1>");
});

// Metodo geral (Qualquer um entra neste metodo)

server.all('/geral',(req,res)=>{
    res.send("<p>Este é um metodo geral ! </p>");
});


server.listen(port,() => console.log(`Escutando a porta ${port}`))


