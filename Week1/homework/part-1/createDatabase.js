let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar"
});

connection.connect(err => {
  if (err) throw err.message;
  connection.query(
    "CREATE DATABASE IF NOT EXISTS world",
    (err, results) => {
      if (err) throw err.message;
      console.log("database created");
    }
  );
  connection.end(function(err) {
    if (err) throw err.message;
  });
});
