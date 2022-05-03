
const mysql = require('mysql');
const md5 = require('md5');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pduii'
});
//
const name = md5('051001');

connection.query(
  `SELECT * FROM user WHERE username = '${name}'`,
  (err, rows) => {
    if(err) throw err;
    console.log(rows);
  }
);
