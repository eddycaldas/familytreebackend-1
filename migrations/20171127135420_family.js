
exports.up = function(knex, Promise) {
  return knex.schema.createTable('family', (table) => {
    table.increments()
    table.text('husband_name')
    table.text('husband_POB')
    table.text('husband_image')
    table.text('wife_name')
    table.text('wife_POB')
    table.text('wife_image')
    table.text('kid1_name')
    table.text('kid1_POB')
    table.text('kid1_image')
    table.text('kid2_name')
    table.text('kid2_POB')
    table.text('kid2_image')
    table.text('kid3_name')
    table.text('kid3_POB')
    table.text('kid3_image')
    table.text('kid4_name')
    table.text('kid4_POB')
    table.text('kid4_image')
    table.text('kid5_name')
    table.text('kid5_POB')
    table.text('kid5_image')
    table.text('kid6_name')
    table.text('kid6_POB')  
    table.text('kid6_image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('family')
};
