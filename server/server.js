const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const controllFilms = require('./controllers/films')
const fs = require('fs')

dotenv.config('./.env');

const app = express();

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    database:process.env.DATABASE_NAME,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD
})
db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('database connected')
    }
})

app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.get('/', controllFilms.filmsView)
// app.get('/', (req,res)=>{
//     res.json
// })
app.listen(5000);