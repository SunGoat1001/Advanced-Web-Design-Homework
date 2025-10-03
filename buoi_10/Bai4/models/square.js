const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const saveSquareData = (sideLength, perimeter, area) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO squares (sideLength, perimeter, area) VALUES (?, ?, ?)';
        pool.query(sql, [sideLength, perimeter, area], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

module.exports = {
    saveSquareData,
};  
