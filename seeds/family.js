exports.seed = function(knex, Promise) {
  return knex('family').del()
    .then(function () {
      return knex('family').insert([
        {
          husband_name: 'Eddy Caldas',
          husband_birthday: '10-06-1973',
          husband_POB: 'Lima, Peru',
          wife_name: 'Erica Caldas',
          wife_birthday: '10-20-1987',
          wife_POB: 'Ohio, USA',
          kid1_name: 'Katherine Caldas',
          kid1_birthday: '11-02-2011',
          kid1_POB: 'Colorado Springs, USA',
          kid2_name: 'Eddie Jr Caldas',
          kid2_birthday: '07-14-2001',
          kid2_POB: 'Denver, USA'
        }
      ]);
    });
};
