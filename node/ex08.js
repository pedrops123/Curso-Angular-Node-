process.stdout.write("Esta tudo bem? \n");
process.stdin.on('data',(r)=>{
    console.log(`Sua reposta foi ${r} \n obrigado !`)
    process.exit();
})