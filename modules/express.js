//Importamos o Express e o UserModel
const express = require('express');
const UserModel = require('../src/models/user.model')

//Atribuimos a função express à variável APP (Essa função possui subfunções)
const app = express();

//O node vai reconhecer que estamos utilizando um Json para fazer as requisições
app.use(express.json());

//O código abaixo é conhecido como um mindware,é executado antes dos endpoints
//Podemos logar informações sobre a request
app.use((req,res,next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);
    next();
});

//Método de requisição do tipo Get
app.get("/home",(req,res) => {
    //Corpo da requisição
    res.contentType('aplication/html')
    //Status da requisição
    res.status(200).send("<h1>Olá mundo</h1>");
})

//Endpoint do tipo Get(Acessa todos os usuários)
app.get("/users",async (req,res) => {
    try{
      const users = await UserModel.find({});
      res.status(200).json(users);
    } catch(error){
      return res.status(500).send(error.message);
    }
});

//Endpoint do tipo Get por Id(Acessa apenas usuários por seu Id)
app.get("/users/:id",async (req,res) => {
  try{
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  }catch(error){
    return res.status(500).send(error.message);
  }
});

//Endpoint do tipo patch
app.patch('/users/:id', async (req,res)=>{
    try{
       const id = req.params.id;
       const user = await UserModel.findByIdAndUpdate(id,req.body,{new: true});
       res.status(200).json(user);
    }catch(error){
       res.status(500).send(error.message);
    }
});

//Endpoint do tipo delete
app.delete('/users/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  }catch(error){
     res.status(500).send(error.message);
  }
});

//Endpoint do tipo Post(Envia dados)
app.post('/users',async (req,res)=>{
   try{
      const user = await UserModel.create(req.body);
      res.status(201).send(user);
   }catch(error){
      res.status(500).send(error.message);
   }
});

const port = 8080;
app.listen(port,() => console.log(`Rodando com Express na porta ${port}!`));