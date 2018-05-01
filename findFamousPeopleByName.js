function findFamousPeople(client, name, callback) {
  const query = `SELECT * FROM famous_people
                 WHERE first_name = $1
                 OR last_name = $1`;

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

module.exports =
{
  findFamousPeople
}