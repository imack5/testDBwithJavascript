const pg = require("pg");
const settings = require("./settings"); // settings.json
const famousPeople = require('./findFamousPeopleByName');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

famousPeople.findFamousPeople(client, process.argv[2],
    (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }

    result.forEach(function(row){
      console.log(`-${row.id}: ${row.first_name} ${row.last_name} born on: ${row.birthdate}`);
    });

    client.end();
  });
});