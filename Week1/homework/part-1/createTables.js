let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "world"
});

connection.connect(err => {
  if (err) throw err;

  let countriesTable =
    "CREATE TABLE if not exists countries (Name CHAR(52), Continent CHAR(52), Population INT(11))";
  connection.query(countriesTable, (err, res) => {
    if (err) throw err;
    console.log("Countries table is created successfuly");
  });

  let citiesTable =
    "CREATE TABLE if not exists cities (Name CHAR(52), Country CHAR(52), Population INT(11))";
  connection.query(citiesTable, (err, res) => {
    if (err) throw err;
    console.log("Cities table is created successfuly");
  });

  connection.end(function(err) {
    if (err) throw err.message;
  });
});
