let mysql = require("mysql");

let countriesValues = [
  ["Sweden", "Europ", 9900000],
  ["Finland", "Europ", 5500000],
  ["Lebanon", "Asia", 4000000],
  ["Egypt", "Africa", 99000000],
  ["Russia", "Asia", 142000000]
];

let citiesValues = [
  ["Stockholm", "Sweden", 960000],
  ["Helsinki", "Finland", 631696],
  ["Beirut", "Lebanon", 2200000],
  ["Cairo", "Egypt", 42000000],
  ["Moscow", "Russia", 11920000]
];

let connection = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "world"
});

connection.connect(err => {
  if (err) throw err;

  let countriesInsert =
    "INSERT INTO countries (name, continent, population) VALUES ?";

  let citiesInsert =
    "INSERT INTO cities (name, country, population) VALUES ?";

  connection.query(
    countriesInsert,
    [countriesValues],
    err => {
      if (err) throw err;
      console.log("Countries Inserted");
    }
  );

  connection.query(citiesInsert, [citiesValues], err => {
    if (err) throw err;
    console.log("Cities Inserted");
  });

  connection.end(function(err) {
    if (err) throw err.message;
  });
});
