var mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "data",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

var slots;

db.query("SELECT * FROM slots", function (error, results, fields) {
  var data = JSON.parse(JSON.stringify(results));
  console.log(data);
  // return data;
});

// console.log(slots);
