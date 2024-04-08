//criar arquivos em nosso projeto

// const fs = require('fs')

//criar log na versão sincrona

// let log = 'mensagem de log\n'
// fs.writeFileSync('./logs.log', log, {flag: 'a+'});
// console.log('fim')

//criar arquivos de forma assincrona

// fs.writeFile('./logs2.log', log, (erro)=>{
//     if(erro){
//         console.log(erro)
//     }
// })

// console.log('fim')

//para excluir arquivos

fs.rmSync('./logs2.log');

console.log('remover arquivos');

//outra maneira

//fs.unlinkSync('./logs.log')