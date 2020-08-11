const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200 , {"content-type":"text/html"})
    res.end("<h1> Teste Request </h1>")
})

const port = 3456;

server.listen(port,()=>{
    console.log(`Escutando a porta ${port}`)
});