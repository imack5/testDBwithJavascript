function findFamousPeople(client, name, callback) {

  client.select('*')
  .from('famous_people')
  .where({first_name: `${name}`})
  .orWhere({last_name: `${name}`})
  .then(function(result){
   callback(null, result)
  })
  .catch(function(error) {
    console.error(error);
  });

}

function insertFamousPeople(client, person) {

client('famous_people')
.insert({first_name: person[0], last_name: person[1], birthdate: (new Date()).toUTCString()})
.catch(function(error) {
    console.error(error);
  });

}

module.exports =
{
  findFamousPeople,
  insertFamousPeople
}