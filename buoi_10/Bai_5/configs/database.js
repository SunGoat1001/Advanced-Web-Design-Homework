const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

module.exports = connection;