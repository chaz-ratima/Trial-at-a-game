
exports.up = function(knex) {
  return knex.schema.createTable('heroName', (table) => {
      table.increments('id').primary()
      table.string('name')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('heroName')
};