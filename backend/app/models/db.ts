const mysql = require('mysql2/promise');
const dbConfig = require('./config/db.config.js');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect((error: any) => {
    if (error) throw error;
    console.log('Successfully connected to the database');
});

module.exports = connection;