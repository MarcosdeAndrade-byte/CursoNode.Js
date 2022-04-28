const mongoose = require('mongoose');

//Configuração para conexão do banco de dados
//Baixamos o dotenvconfig para utlizar as variáveis com conteúdo sensível
const connectToDatabase = async () =>{
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.pdakp.mongodb.net/database?retryWrites=true&w=majority`, 
    (error) => {
        if(error){
            return console.log('Ocorreu um erro ao se conectar com o banco de dados: ',error);
        }
        return console.log("Conexão ao banco de dados realizada com sucesso!");
    });
}

//Exportamos o módulo connectToDatabase
module.exports = connectToDatabase