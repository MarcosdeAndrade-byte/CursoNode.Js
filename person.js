//Criamos uma classe pessoa
class Person{
    //Construtor
    constructor(name){
        this.name = name;
    }

    //Função
    sayMyName(){
        return `My name is ${this.name}!`;
    }
}

//Exportamos o módulo pessoa
module.exports = {
    Person,
}