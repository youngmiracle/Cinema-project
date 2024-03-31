const mysql = require('mysql2');
const dotenv = require('dotenv');
const fs = require('fs')

dotenv.config('../.env')

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    database:process.env.DATABASE_NAME,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD
})

exports.filmsView = (req,res) => {
    db.query(`SELECT * FROM films`, async(err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            // fs.writeFileSync('film.json', JSON.stringify(result))
            res.json(result)
        }
    })
    
}