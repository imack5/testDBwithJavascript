const pg = require("pg");
const settings = require("./settings"); // settings.json
const famousPeople = require('./findFamousPeopleByName');

var knex = require('knex')({
    client: 'pg',
    connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database,
  }
});

/*famousPeople.findFamousPeople(knex, process.argv[2],
    (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }

    result.forEach(function(row){
      console.log(`-${row.id}: ${row.first_name} ${row.last_name} born on: ${row.birthdate}`);
    });
    knex.destroy();
});*/

famousPeople.insertFamousPeople(knex, [process.argv[2], process.argv[3]]);

famousPeople.findFamousPeople(knex, process.argv[2],
    (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }

    result.forEach(function(row){
      console.log(`-${row.id}: ${row.first_name} ${row.last_name} born on: ${row.birthdate}`);
    });
    knex.destroy();
});
