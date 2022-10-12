import mysql from "mysql";
import dotenv from "dotenv";
import { response } from "express";
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user:  process.env.USER,
    password: process.env.PASS,
    port: process.env.DBPORT,
    database: process.env.DATABASE,
});

connection.connect(function (err){
    if(err){
        console.error(err.message);
        return;
    } else {
        console.log('Congratulations your Database is ' + connection.state + '...');
    }
});

class Database {
    static getDbServiceInstance() {
        return instance ? instance : new Database();
    }

    async getData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM city;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}



export {Database};



// class database{
//     static getDatabaseInstance(){
//         return instance ? instance : new database();
//     }

//     async getAllData(){
//         try{
//             const response = await new Promise((resolve, response) => {
//                 const query = "SELECT * FROM city;";

//                 connection.query(query, (err, results) =>{
//                     if (err) reject(new Error(err.message));
//                     resolve(results);
//                 })
//             });
//             console.log(response);

//         } catch(err){
//             console.log(err);
//         }
//     }
// }







