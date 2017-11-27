const knex = require('./')

module.exports = {
  
  family: {
    getAll: function() {
      return knex('family');
    },
    getOne: function(id) {
      return knex('family').where('id', id).first();
    },
    create: function(parents) {
      return knex('family').insert(parents, 'id').returning('*');
    },
    updated: function(id, parents) {
      return knex('family').where('id', id).update(parents, '*');
    },
    delete(id) {
      return knex('family').where('id', id).del();
    },
  },
}