function insertFamousPeople(client, person){

client('test_db')
.insert({first_name: person[0]}, {last_name: person[1]}, {birthdate: person[2]})
.catch(function(error) {
    console.error(error);
  });
}

