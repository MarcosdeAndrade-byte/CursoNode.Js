//Com o módulo FS vamos conseguir manipular o sistema de arquivos
const { Console, error } = require("console");
const fs = require("fs");
const path = require("path");

//Criar uma pasta
/*fs.mkdir(path.join(__dirname,'/test'),(error) =>{
    if(error){
        return console.log("Erro: ",error)
    }
    Console.log("Pasta criada com sucesso!")
});*/

//Criar um arquivo (A função writeFile sobrescreve  o arquivo)
fs.writeFile(path.join(__dirname,'/test','teste.html'),
    "Hello Node!",
    (error)=>{
    if(error){
       return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso");
})

//Adicionar à um arquivo
fs.appendFile(path.join(__dirname,'/test','teste.html'),
    "Hello world!",
    (error) => {
      if(error){
        return console.log("Erro: ",error);
    }
    console.log("Arquivo criado com sucesso");
})

//Ler um arquivo
fs.readFile(path.join(__dirname,'/test','teste.html'),
    'utf-8',
    (error,data) =>{
    if(error){
        return console.log('Erro: ',error);
    }
    console.log(data);
})