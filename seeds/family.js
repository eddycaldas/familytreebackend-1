exports.seed = function(knex, Promise) {
  return knex('family').del()
    .then(function () {
      return knex('family').insert([
        {
          husband_name: 'Eddy Caldas',
          husband_birthday: '10-06-1973',
          husband_POB: 'Lima, Peru',
          husband_image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/18582298_1755879934427317_5289505391998070888_n.jpg?oh=d39838589f89987dd00e5027334bc799&oe=5AD7B000',
          wife_name: 'Erica Caldas',
          wife_birthday: '10-20-1987',
          wife_POB: 'Ohio, USA',
          wife_image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/16508645_1834489323471344_6187219432219506251_n.jpg?oh=b602ce48a94cf381314d7d3f674610de&oe=5A9526D4',
          kid1_name: 'Katherine Caldas',
          kid1_birthday: '11-02-2011',
          kid1_POB: 'Colorado Springs, USA',
          kid1_image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/12974365_1331668206848494_7660531240724992416_n.jpg?oh=4916217da941f8d154618230e20f9801&oe=5A9BBFB6',
          kid2_name: 'Eddie Jr Caldas',
          kid2_birthday: '07-14-2001',
          kid2_POB: 'Denver , USA',
          kid2_image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/10256960_1134578779890772_5786803150090096225_n.jpg?oh=4158ba221be4761d813bb49905d8a767&oe=5AD1CA84'
        },
        {
          husband_name: 'Ronaldinho Velez',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          husband_image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjpjPbxqenXAhUc0IMKHXXOAhIQjRwIBw&url=https%3A%2F%2Ftwitter.com%2F10ronaldinho&psig=AOvVaw2QX8soH53Bm8wxrbNZAulW&ust=1512235367052231',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom2.jpeg',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA',
          kid1_image: '../image/girl2.jpeg'
        },
        {
          husband_name: 'Sam Supreme',
          husband_birthday: '07-06-1997',
          husband_POB: 'Colorado, USA',
          husband_image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAqyAAAAJGI5N2U3ODkzLTc3ZTAtNDQ0ZS1iZTE0LThjZDBlNjU5ZmYyMw.jpg',
          wife_name: 'Nina Sky',
          wife_birthday: '08-10-1999',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom3.jpeg',
          kid1_name: 'Kayla Supreme',
          kid1_birthday: '02-26-2016',
          kid1_POB: 'Texas, USA',
          kid1_image: '../image/girl3.jpeg'
        },
        {
          husband_name: 'Gabriel Iglesias',
          husband_birthday: '07-06-1988',
          husband_POB: 'California, USA',
          husband_image: 'https://marriedwiki.com/uploads/bio/gabriel-iglesias.jpg',
          wife_name: 'Mrs Shorty',
          wife_birthday: '08-10-1989',
          wife_POB: 'Washington DC, USA',
          wife_image: '../image/mom4.jpeg',
          kid1_name: 'Little Pitbull',
          kid1_birthday: '02-26-2011',
          kid1_POB: 'Colorado, USA',
          kid1_image: '../image/kid2.jpeg',
          kid2_name: 'Daddy Yankee',
          kid2_birthday: '08-16-2012',
          kid2_POB: 'Colorado, USA',
          kid2_image: '../image/kid3.jpeg',
          kid3_name: 'Dylan Perez',
          kid3_birthday: '01-23-2014',
          kid3_POB: 'Colorado, USA',
          kid3_image: '../image/kid4.jpeg',
          kid4_name: 'Don Omar',
          kid4_birthday: '02-26-2015',
          kid4_POB: 'Colorado, USA',
          kid4_image: '../image/kid5.jpeg'
        },
        {
          husband_name: 'Ben Awad',
          husband_birthday: '07-16-1983',
          husband_POB: 'Hollywood, USA',
          husband_image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAwBAAAAJGRlZTZkYzlmLTFmMjktNGM4Ny1iZTdhLWJkYWIxYmY3OWVmOA.jpg',
          wife_name: 'Sho Awad',
          wife_birthday: '08-10-1985',
          wife_POB: 'Tokyo, Japan',
          wife_image: '../image/mom1.jpeg',
          kid1_name: 'Miley Sirus',
          kid1_birthday: '02-26-2001',
          kid1_POB: 'Las Vegas, USA',
          kid1_image: '../image/kid3.jpeg',
          kid2_name: 'Leo Mark',
          kid2_birthday: '08-16-2009',
          kid2_POB: 'Colorado, USA',
          kid2_image: '../image/kid6.jpeg',
          kid3_name: 'Guyen Hoang',
          kid3_birthday: '04-27-2011',
          kid3_POB: 'Colorado, USA',
          kid3_image: '../image/kid2.jpeg',
          kid4_name: 'Ching Wong',
          kid4_birthday: '02-26-2012',
          kid4_POB: 'Colorado, USA',
          kid4_image: '../image/kid6.jpeg'
        },
        {
          husband_name: 'Ricky Velesquez',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          husband_image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAcWAAAAJDdkZTdhYWZlLTk2N2ItNGQwYy1iZjI3LTVkMmJlNmJkMzQyMg.jpg',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom2.jpeg',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA',
          kid1_image: '../image/girl2.jpeg'
        },
        {
          husband_name: 'Spencer Carlie',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          husband_image: 'https://www.troy.edu/misstroy/assets/images/2017/carlie-spencer.jpg',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom2.jpeg',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA',
          kid1_image: '../image/girl2.jpeg'
        },{
          husband_name: 'Michael Nissen',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          husband_image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAsQAAAAJDY5NGM4OWZmLWVhMzQtNDEyYS05NGQyLTBkYWUyZDk4ZTQyOA.jpg',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom2.jpeg',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA',
          kid1_image: '../image/girl2.jpeg'
        },{
          husband_name: 'Red Badger',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          husband_image: 'https://d1t3gia0in9tdj.cloudfront.net/photo/tributes/t/8/r/207x207/4247477/Granville-Barger-1491587601.png',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom2.jpeg',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA',
          kid1_image: '../image/girl2.jpeg'
        },
        {
          husband_name: 'Brandon Brown',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          husband_image: 'https://media.poetryfoundation.org/m/image/1893/Brandown%20Brown.jpg?w=1200&h=1200&fit=max',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom2.jpeg',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA',
          kid1_image: '../image/girl2.jpeg'
        },
        {
          husband_name: 'Steve Jhonson',
          husband_birthday: '07-06-1977',
          husband_POB: 'Brasilia, Brasil',
          husband_image: 'https://img.stackshare.io/user/108734/6104558.jpeg',
          wife_name: 'Rosie Martinez',
          wife_birthday: '08-10-1981',
          wife_POB: 'Las Vegas, USA',
          wife_image: '../image/mom2.jpeg',
          kid1_name: 'Kayla Velez',
          kid1_birthday: '10-22-2002',
          kid1_POB: 'Miami, USA',
          kid1_image: '../image/girl2.jpeg'
        },
        {
          husband_name: 'Benjamin Awad',
          husband_birthday: '07-16-1983',
          husband_POB: 'Hollywood, USA',
          husband_image: 'https://benjaminfedwards.com/wp-content/uploads/2015/04/Mohammad-Awad-Eljied.png',
          wife_name: 'Sho Awad',
          wife_birthday: '08-10-1985',
          wife_POB: 'Tokyo, Japan',
          wife_image: '../image/mom1.jpeg',
          kid1_name: 'Miley Sirus',
          kid1_birthday: '02-26-2001',
          kid1_POB: 'Las Vegas, USA',
          kid1_image: '../image/kid3.jpeg',
          kid2_name: 'Leo Mark',
          kid2_birthday: '08-16-2009',
          kid2_POB: 'Colorado, USA',
          kid2_image: '../image/kid6.jpeg',
          kid3_name: 'Guyen Hoang',
          kid3_birthday: '04-27-2011',
          kid3_POB: 'Colorado, USA',
          kid3_image: '../image/kid2.jpeg',
          kid4_name: 'Ching Wong',
          kid4_birthday: '02-26-2012',
          kid4_POB: 'Colorado, USA',
          kid4_image: '../image/kid6.jpeg'
        },    
        {
              husband_name: 'Mike Rocks',
              husband_birthday: '07-16-1983',
              husband_POB: 'Hollywood, USA',
              husband_image: 'https://s3.amazonaws.com/hiphopdx-production/2011/10/mikey.jpg',
              wife_name: 'Sho Awad',
              wife_birthday: '08-10-1985',
              wife_POB: 'Tokyo, Japan',
              wife_image: '../image/mom2.jpeg',
              kid1_name: 'Miley Sirus',
              kid1_birthday: '02-26-2001',
              kid1_POB: 'Las Vegas, USA',
              kid1_image: '../image/kid3.jpeg',
              kid2_name: 'Leo Mark',
              kid2_birthday: '08-16-2009',
              kid2_POB: 'Colorado, USA',
              kid2_image: '../image/kid6.jpeg',
              kid3_name: 'Guyen Hoang',
              kid3_birthday: '04-27-2011',
              kid3_POB: 'Colorado, USA',
              kid3_image: '../image/kid2.jpeg',
              kid4_name: 'Ching Wong',
              kid4_birthday: '02-26-2012',
              kid4_POB: 'Colorado, USA',
              kid4_image: '../image/kid6.jpeg'
            },
            {
              husband_name: 'Robert Vince',
              husband_birthday: '07-16-1983',
              husband_POB: 'Hollywood, USA',
              husband_image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjUwNTA3OTIyNl5BMl5BanBnXkFtZTcwMzA4ODMzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
              wife_name: 'Sho Awad',
              wife_birthday: '08-10-1985',
              wife_POB: 'Tokyo, Japan',
              wife_image: '../image/mom1.jpeg',
              kid1_name: 'Miley Sirus',
              kid1_birthday: '02-26-2001',
              kid1_POB: 'Las Vegas, USA',
              kid1_image: '../image/kid3.jpeg',
              kid2_name: 'Leo Mark',
              kid2_birthday: '08-16-2009',
              kid2_POB: 'Colorado, USA',
              kid2_image: '../image/kid6.jpeg',
              kid3_name: 'Guyen Hoang',
              kid3_birthday: '04-27-2011',
              kid3_POB: 'Colorado, USA',
              kid3_image: '../image/kid2.jpeg',
              kid4_name: 'Ching Wong',
              kid4_birthday: '02-26-2012',
              kid4_POB: 'Colorado, USA',
              kid4_image: '../image/kid6.jpeg'
            },
            {
              husband_name: 'Ron White',
              husband_birthday: '07-16-1983',
              husband_POB: 'Hollywood, USA',
              husband_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ron_White01.jpg/220px-Ron_White01.jpg',
              wife_name: 'Sho Awad',
              wife_birthday: '08-10-1985',
              wife_POB: 'Tokyo, Japan',
              wife_image: '../image/mom1.jpeg',
              kid1_name: 'Miley Sirus',
              kid1_birthday: '02-26-2001',
              kid1_POB: 'Las Vegas, USA',
              kid1_image: '../image/kid3.jpeg',
              kid2_name: 'Leo Mark',
              kid2_birthday: '08-16-2009',
              kid2_POB: 'Colorado, USA',
              kid2_image: '../image/kid6.jpeg',
              kid3_name: 'Guyen Hoang',
              kid3_birthday: '04-27-2011',
              kid3_POB: 'Colorado, USA',
              kid3_image: '../image/kid2.jpeg',
              kid4_name: 'Ching Wong',
              kid4_birthday: '02-26-2012',
              kid4_POB: 'Colorado, USA',
              kid4_image: '../image/kid6.jpeg'
            },
            {
              husband_name: 'Lionel Riche',
              husband_birthday: '07-16-1983',
              husband_POB: 'Hollywood, USA',
              husband_image: 'https://img.discogs.com/doAGQ8xhyUpqsLEvto0b0sKafMk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-69722-1500196110-9280.jpeg.jpg',
              wife_name: 'Sho Awad',
              wife_birthday: '08-10-1985',
              wife_POB: 'Tokyo, Japan',
              wife_image: '../image/mom1.jpeg',
              kid1_name: 'Miley Sirus',
              kid1_birthday: '02-26-2001',
              kid1_POB: 'Las Vegas, USA',
              kid1_image: '../image/kid3.jpeg',
              kid2_name: 'Leo Mark',
              kid2_birthday: '08-16-2009',
              kid2_POB: 'Colorado, USA',
              kid2_image: '../image/kid6.jpeg',
              kid3_name: 'Guyen Hoang',
              kid3_birthday: '04-27-2011',
              kid3_POB: 'Colorado, USA',
              kid3_image: '../image/kid2.jpeg',
              kid4_name: 'Ching Wong',
              kid4_birthday: '02-26-2012',
              kid4_POB: 'Colorado, USA',
              kid4_image: '../image/kid6.jpeg'
            },
            {
              husband_name: 'Rod Stewart',
              husband_birthday: '07-16-1983',
              husband_POB: 'Hollywood, USA',
              husband_image: 'https://necropedia.org/jdd/public/documents/celebrities/804.jpg',
              wife_name: 'Sho Awad',
              wife_birthday: '08-10-1985',
              wife_POB: 'Tokyo, Japan',
              wife_image: '../image/mom1.jpeg',
              kid1_name: 'Miley Sirus',
              kid1_birthday: '02-26-2001',
              kid1_POB: 'Las Vegas, USA',
              kid1_image: '../image/kid3.jpeg',
              kid2_name: 'Leo Mark',
              kid2_birthday: '08-16-2009',
              kid2_POB: 'Colorado, USA',
              kid2_image: '../image/kid6.jpeg',
              kid3_name: 'Guyen Hoang',
              kid3_birthday: '04-27-2011',
              kid3_POB: 'Colorado, USA',
              kid3_image: '../image/kid2.jpeg',
              kid4_name: 'Ching Wong',
              kid4_birthday: '02-26-2012',
              kid4_POB: 'Colorado, USA',
              kid4_image: '../image/kid6.jpeg'
            },
            {
              husband_name: 'Abb Nigts',
              husband_birthday: '07-16-1983',
              husband_POB: 'Hollywood, USA',
              husband_image: 'http://l7.alamy.com/zooms/acb4d87cfa3249bd953ec6d8274f3741/boogie-nights-1997-mark-wahlberg-boog-061-bkabbx.jpg',
              wife_name: 'Sho Awad',
              wife_birthday: '08-10-1985',
              wife_POB: 'Tokyo, Japan',
              wife_image: '../image/mom1.jpeg',
              kid1_name: 'Miley Sirus',
              kid1_birthday: '02-26-2001',
              kid1_POB: 'Las Vegas, USA',
              kid1_image: '../image/kid3.jpeg',
              kid2_name: 'Leo Mark',
              kid2_birthday: '08-16-2009',
              kid2_POB: 'Colorado, USA',
              kid2_image: '../image/kid6.jpeg',
              kid3_name: 'Guyen Hoang',
              kid3_birthday: '04-27-2011',
              kid3_POB: 'Colorado, USA',
              kid3_image: '../image/kid2.jpeg',
              kid4_name: 'Ching Wong',
              kid4_birthday: '02-26-2012',
              kid4_POB: 'Colorado, USA',
              kid4_image: '../image/kid6.jpeg'
            }
      ]);
    });
};
