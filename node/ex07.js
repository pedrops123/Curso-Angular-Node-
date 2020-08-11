function temParametro(param){
    return process.argv.indexOf(param) !== -1;
}

if(temParametro("teste")){
    console.log("Atenção!");
}
else
{
    console.log("Tudo tranquilo !");
}

