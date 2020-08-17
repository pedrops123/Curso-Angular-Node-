// Express 
const module_express = require('express');
const router = module_express.Router();

router.use((req,res,next)=>{
    const init = Date.now()
    next();
    console.log(`Tempo = ${ Date.now() - init } ms`)

})



router.get('/produtos/:id',(rq,rs) =>{
    rs.json(
        {
             id:rq.params.id,
             name:"Teste produto" 
        })
})


router.get('/clientes/:id',(rq,rs)=>{
    rs.json({
        id:rq.params.id,
        nome:"Pedro Furlan"
    })
})


module.exports = router