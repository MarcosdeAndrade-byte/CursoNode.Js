const mongoose = require('mongoose')

//Vamos criar uma tabela no banco de dados e passar um objeto com os campos que queremos
const userSchema = new mongoose.Schema({
    //Primeiro nome do usuário/Do tipo String/É obrigatório passar esse campo
     firstName: {
         type:String,
         required: true,
     },
     lastName: {
        type: String,
        required: true,
     },
     email:{
         type: String,
         required: true,
     },
     password:{
         type: String,
         required: true,
         minlength:7,
     },
});

const UserModel = mongoose.model("User",userSchema);
module.exports = UserModel;