//Importamos um módulo nativo do Node.JS
//const path = require('path');

//Pega o nome do arquivo
console.log(path.basename(__filename));

//Node do diretório atual
console.log(path.dirname(__filename));

//Extensão do arquivo
console.log(path.extname(__filename))

//Criar objeto Path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos (__dirname + Teste)
console.log(path.join(__dirname,"Teste"));