const modulo_express = require('express');
const server = modulo_express();

var port = 3000;

server.use('/api',(req,res,next)=>{
    console.log('inicio');
    next()
    console.log('Fim');
});

server.use('/api',(req , res)=>{
    console.log('Reposta');
    res.send('<h1> Ola mundo !</h1>');

})






server.listen(port,() => console.log(`Escutando a porta ${port}`))


