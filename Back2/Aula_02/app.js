//ler arquivo externo usando node
//vamos usar a lib fs (file system)

const fs = require('fs');

//fs.readFile('./dados.csv', (erro, data)=>{
//    if (erro) {
//        console.log(erro)
//    } else {
//        console.log(data.toString())
//    }
//}) 

//console.log('segunda operação')

// let dados = fs.readFileSync('../Aula_02/dados.csv');
// console.log(dados.toString());
// console.log("Segunda Operação");

//simunlando caminho errado

let dados = ""
if (fs.existsSync('..Aula02/dados.csv')){
    dados = fs.readFileSync('..Aula02/dados.csv')
    console.log(dados.toString)
}else{
    console.log('arquivo não encontrado')
}

console.log("fim")