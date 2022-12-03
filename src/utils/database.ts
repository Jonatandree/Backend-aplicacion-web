//conexion con mongo

import mongoose from 'mongoose';


export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(`mongodb+srv://juniorsteven:realmadrid14@cluster0.vvxmrxy.mongodb.net/proyecto?retryWrites=true&w=majority`) //Asincrona
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}