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
        },
        {
          husband_name: 'Ronaldinho Velez',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA'
        },
        {
          husband_name: 'Sam Supreme',
          husband_birthday: '07-06-1997',
          husband_POB: 'Colorado, USA',
          wife_name: 'Nina Sky',
          wife_birthday: '08-10-1999',
          wife_POB: 'Las Vegas, USA',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '02-26-2016',
          kid1_POB: 'Texas, USA'
        },
        {
          husband_name: 'Gabriel Iglesias',
          husband_birthday: '07-06-1988',
          husband_POB: 'California, USA',
          wife_name: 'Mrs Shorty',
          wife_birthday: '08-10-1989',
          wife_POB: 'Washington DC, USA',
          kid1_name: 'Little Pitbull',
          kid1_birthday: '02-26-2011',
          kid1_POB: 'Colorado, USA',
          kid2_name: 'Daddy Yankee',
          kid2_birthday: '08-16-2012',
          kid2_POB: 'Colorado, USA',
          kid3_name: 'Dylan Perez',
          kid3_birthday: '01-23-2014',
          kid3_POB: 'Colorado, USA',
          kid4_name: 'Don Omar',
          kid4_birthday: '02-26-2015',
          kid4_POB: 'Colorado, USA'
        }
      ]);
    });
};
