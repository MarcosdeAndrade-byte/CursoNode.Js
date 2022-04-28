const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();
connectToDatabase();

//const {Person} = require("./person");
//const person = new Person('Lorena');
//require('./modules/path')
require("./modules/express")