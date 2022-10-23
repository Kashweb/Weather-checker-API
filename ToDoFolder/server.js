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


app.get('/insert', (req, res) => {
    const db = Database.getDbServiceInstance();

    const result = db.getData();
    console.log("request.body");
});


app.get('/get', (req, res) => {
    const db = Database.getDbServiceInstance();

    const result = db.getData();
    
    result
    .then(data => res.json({data : data}))
    .catch(err => console.log(err));
});




const PORT = process.env.PORT;

app.listen(PORT, () =>
    console.log(`the app is running on ${PORT}`)
    );