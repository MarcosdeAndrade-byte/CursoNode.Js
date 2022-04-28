//Importando o módulo nativo HTTP
const http = require('http')
//Selecionando uma porta 
const port = 8080

//Criamos o nosso servidor
const server = http.createServer((req,res) => {
    //Se o usuário fizer uma requisição /home vamos printar um Olá mundo na tela
     if(req.url === '/home'){
         //Status e corpo da requisição
        res.writeHead(200,{'Content-Type': 'text/html'})
        //Envio do dado em formato de texto
        res.end('<h1>Ola mundo!</h1>')
     }

     if(req.url === '/users'){
        const users = [
            {
              name: 'John Doe',
              email: 'John@doe.com'
            },
            {
              name: 'Jane Doe',
              email: 'Jane@doe.com'
            }
        ]
        //Status e corpo da requisição
        res.writeHead(200,{'Content-Type': 'application/json'})
        //Envio dos dados/Transformando objetos em texto com JSON
        res.end(JSON.stringify(users))
     }
});

server.listen(port,() => console.log(`Rodando na porta ${port}!`));