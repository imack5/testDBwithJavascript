
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('milestones', function (table) {
      table.increments();
      table.string('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ]);

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
