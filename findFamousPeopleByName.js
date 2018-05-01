function findFamousPeople(client, name, callback) {
  const query = `SELECT * FROM famous_people
                 WHERE first_name = $1
                 OR last_name = $1`;

  client.query(query, [name],

   (err, result) => {
      if (err) {
        callback(err);
        return;
      }

   callback(null, result.rows);

 });
}

module.exports =
{
  findFamousPeople
}