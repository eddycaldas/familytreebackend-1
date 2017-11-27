
exports.up = function(knex, Promise) {
  return knex.schema.createTable('family', (table) => {
    table.increments()
    table.text('husband_name')
    table.date('husband_birthday')
    table.text('husband_POB')
    table.text('wife_name')
    table.date('wife_birthday')
    table.text('wife_POB')
    table.text('kid1_name')
    table.date('kid1_birthday')
    table.text('kid1_POB')
    table.text('kid2_name')
    table.date('kid2_birthday')
    table.text('kid2_POB')
    table.text('kid3_name')
    table.date('kid3_birthday')
    table.text('kid3_POB')
    table.text('kid4_name')
    table.date('kid4_birthday')
    table.text('kid4_POB')
    table.text('kid5_name')
    table.date('kid5_birthday')
    table.text('kid5_POB')
    table.text('kid6_name')
    table.date('kid6_birthday')
    table.text('kid6_POB')  
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('family')
};
