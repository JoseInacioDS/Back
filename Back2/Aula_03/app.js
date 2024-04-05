//criar pastas

const fs = require('fs');

//com metodo sincrono
fs.mkdirSync('logs')

//com metodo assincrono
fs.mkdir('logs2'), (erro)=>{
    if(erro){
        console.log('Erro!')
    }
}

if(fs.existSync('./logs2')){
    fs.rmdSync('./logs2');
}