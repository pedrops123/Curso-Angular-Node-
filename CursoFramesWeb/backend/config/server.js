const port = 3003
const body_parser = require('body-parser')
const express = require('express')


// Criação do servidor 

const server = express();
//Se caso Request GET
server.use(body_parser.urlencoded({extended:true}))

// Se caso Request POST
server.use(body_parser.json())

server.listen(port,()=>{console.log(`Backend Escutando porta ${ port }`) })

    



