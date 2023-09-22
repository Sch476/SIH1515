const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "your_database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM your_table", (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

const mysql = require("mysql2");
const express = require("express");
const app = express();
const pool = mysql.createPool({
  host: "localhost", // your server ip or domain name
  user: "root", // username for db
  password: "", // server password
  database: "test", // db
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
});

function Query(SQLQUERY) {
  return new Promise((resolve, reject) => {
    pool.query(SQLQUERY, function (err, rows, fields) {
      // Connection is automatically released when query resolves
      console.log(err);
      resolve(rows);
    });
  });
}

app.get("/", async function (req, res) {
  let SQLQUERY = req.query.sqlquery;
  console.log(SQLQUERY);
  let query = await Query(SQLQUERY);
  res.send(query);
});

app.listen(80);
