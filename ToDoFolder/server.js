import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import * as DatabaseImport from '../ToDoFolder/Database.js';
import {Database} from '../ToDoFolder/Database.js';



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));


app.get('/get', (req, response) => {
    const db = Database.getDbServiceInstance();

    const result = db.getData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});

// app.get("/get", (req, res) => {
//     const  db = Database.getDatabaseInstance();
    
//     const result = db.getAllData();

//     result.then( data => response.json(
//         {data: data}
//     ))
//     .catch(err => console.log(err));

// });

// app.get("/geto", (req, res) => {
//     res.send(total);
// });


const PORT = process.env.PORT;

app.listen(PORT, () => 
    console.log(`the app is running on ${PORT}`)
    );