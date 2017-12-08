exports.seed = function(knex, Promise) {
  return knex('family').del().then(function() {
    return knex('family').insert([
      {
        husband_name: 'Robertc Vince',
        husband_POB: 'Hollywood, USA',
        husband_image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjUwNTA3OTIyNl5BMl5BanBnXkFtZTcwMzA4ODMzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        wife_name: 'Ralphb Vince',
        wife_POB: 'Tokyo, Japan',
        wife_image: 'http://www.apalaweb.org/wp-content/uploads/2016/02/2015-10-15-10.37.59.jpg',
        kid1_name: 'Lactusa Vince',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: 'https://ssl.c.photoshelter.com/img-get/I0000PtKxiFyv_MM/s/860/860/0523A191.jpg',
        kid2_name: 'Samuelz Sanots',
        kid2_POB: 'Colorado, USA',
        kid2_image: 'https://i.pinimg.com/736x/8a/09/01/8a09010b89d996b3788b090b97e2fba6--kids-photography-boys-photography-ideas.jpg',
        kid3_name: 'Ojuy Kee',
        kid3_POB: 'Colorado, USA',
        kid3_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0XJWAMAUkH1wHvdHAwvnZ46bkXOCmi6zi0iX4vH2HItI2VOS',
        kid4_name: 'Creguix Wonge',
        kid4_POB: 'Colorado, USA',
        kid4_image: 'https://petapixel.com/assets/uploads/2011/08/nikonambass.jpg'
      }, 
      {
        husband_name: 'Mikei Rocks',
        husband_POB: 'Hollywood, USA',
        husband_image: 'https://s3.amazonaws.com/hiphopdx-production/2011/10/mikey.jpg',
        wife_name: 'Moochoh Tak',
        wife_POB: 'Tokyo, Japan',
        wife_image: 'http://www.prettydesigns.com/wp-content/uploads/2014/10/Fresh-Short-Haircut-for-Asian-Hairstyles.jpg',
        kid1_name: 'Miriamg Rocks',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-02/11/16/campaign_images/webdr13/17-images-people-who-dont-have-asian-hair-will-ne-2-14548-1455226068-4_dblbig.jpg',
        kid2_name: 'Leof Rocks',
        kid2_POB: 'Colorado, USA',
        kid2_image: 'http://www.rvgoddess.com/BLOG/2016/AUGUST/Photos/080516-01.jpg',
        kid3_name: 'Tiwae Tiwa',
        kid3_POB: 'Colorado, USA',
        kid3_image: 'https://asianamericangroup3.wikispaces.com/file/view/asian%20american%20education.jpg/465660844/asian%20american%20education.jpg',
        kid4_name: 'Cingd Woong',
        kid4_POB: 'Colorado, USA',
        kid4_image: 'https://youthradio.org/wp-content/uploads/2016/03/Amber-780x440.jpg'
      }, 
      {
        husband_name: 'Benm Awad',
        husband_POB: 'Hollywood, USA',
        husband_image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAwBAAAAJGRlZTZkYzlmLTFmMjktNGM4Ny1iZTdhLWJkYWIxYmY3OWVmOA.jpg',
        wife_name: 'Chinl Gonee',
        wife_POB: 'Tokyo, Japan',
        wife_image: 'https://s-media-cache-ak0.pinimg.com/avatars/yawad87-1386562659_280.jpg',
        kid1_name: 'Milyk Sirs',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/037/2fd/1774548.jpg',
        kid2_name: 'Leonardoj Marka',
        kid2_POB: 'Colorado, USA',
        kid2_image: 'https://peopledotcom.files.wordpress.com/2016/08/miley_cyrus5.jpg?w=300',
        kid3_name: 'Guweni Hoen',
        kid3_POB: 'Colorado, USA',
        kid3_image: 'https://i.pinimg.com/736x/66/80/f2/6680f29ce803c8fe72a0e6d765e77562--half-asian-babies-asian-kids.jpg',
        kid4_name: 'Chinhh Wongtn',
        kid4_POB: 'Colorado, USA',
        kid4_image: 'http://www.incultureparent.com/wp-content/uploads/2013/01/2013janICP-electionv2.jpg'
      }, 
      {
        husband_name: 'Gabriels Iglesias',
        husband_POB: 'California, USA',
        husband_image: 'https://marriedwiki.com/uploads/bio/gabriel-iglesias.jpg',
        wife_name: 'Mrsr Shorty',
        wife_POB: 'Washington DC, USA',
        wife_image: 'https://ecelebrityfacts.com/images/96469/claudia-valdez-1508044470.png',
        kid1_name: 'Littleq Pitbull',
        kid1_POB: 'Colorado, USA',
        kid1_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMHaxswBY-ba3OQs4yx7UkAXsVMGy03Rv9AAEtxc3qqk_h3h03Q',
        kid2_name: 'Daddyp Yankee',
        kid2_POB: 'Colorado, USA',
        kid2_image: 'http://www.trbimg.com/img-59e693e1/turbine/ct-abn-crosby-pitbull-victim-st-1018-20171017',
        kid3_name: 'Dylano Perez',
        kid3_POB: 'Colorado, USA',
        kid3_image: 'https://scontent.cdninstagram.com/t51.2885-19/11116655_1473010112974117_1383140477_a.jpg',
        kid4_name: 'Donn Omar',
        kid4_POB: 'Colorado, USA',
        kid4_image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Omar_Khadr_-_child.jpg'
      }, 
      {
        husband_name: 'Eddy Caldas',
        husband_POB: 'Lima, Peru',
        husband_image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/18582298_1755879934427317_5289505391998070888_n.jpg?oh=d39838589f89987dd00e5027334bc799&oe=5AD7B000',
        wife_name: 'Erica Caldas',
        wife_POB: 'Ohio, USA',
        wife_image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/16508645_1834489323471344_6187219432219506251_n.jpg?oh=b602ce48a94cf381314d7d3f674610de&oe=5A9526D4',
        kid1_name: 'Katherine Caldas',
        kid1_POB: 'Colorado Springs, USA',
        kid1_image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/12974365_1331668206848494_7660531240724992416_n.jpg?oh=4916217da941f8d154618230e20f9801&oe=5A9BBFB6',
        kid2_name: 'Eddie Jr Caldas',
        kid2_POB: 'Denver , USA',
        kid2_image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/10842244_1073009579381026_4637937275276370043_o.jpg?oh=1e1a68c56d69b8c1d9e8349caa8936fa&oe=5A91810F',
        // kid3_name: '',
        // kid3_POB: '',
        // kid3_image: '',
        // kid4_name: '',
        // kid4_POB: '',
        // kid4_image: ''
      }, 
      {
        husband_name: 'Ronaldyinho Velez',
        husband_POB: 'Brasilia, Brasil',
        husband_image: 'https://pbs.twimg.com/profile_images/817091464731693057/5RSuRSGK_400x400.jpg',
        wife_name: 'Rachelx Velez',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'http://cdn.skim.gs/images/m5jidzdsd6gdfvd2x38r/20-pop-songs-for-kids-that-dont-involve-sex-drugs-or-lady-gaga',
        kid1_name: 'Kaylahw Velez',
        kid1_POB: 'Miami, USA',
        kid1_image: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/4/000/17a/17c/1b64f30.jpg',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Samv Supreme',
        husband_POB: 'Colorado, USA',
        husband_image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAqyAAAAJGI5N2U3ODkzLTc3ZTAtNDQ0ZS1iZTE0LThjZDBlNjU5ZmYyMw.jpg',
        wife_name: 'Ninau Sky',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BC7iy2E0htIAxq7Xb7wXx77jePBv-KhJVUkrUtfKhWb10aPDLQ',
        kid1_name: 'Kaylat Supreme',
        kid1_POB: 'Texas, USA',
        kid1_image: 'https://i.pinimg.com/736x/59/c0/f0/59c0f0dd3b4285c320b7d8bc7f9a56c1--baby-fashion-clothes-cute-kids-fashion.jpg',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Rickyg Velesquez',
        husband_POB: 'Brasilia, Brasil',
        husband_image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAcWAAAAJDdkZTdhYWZlLTk2N2ItNGQwYy1iZjI3LTVkMmJlNmJkMzQyMg.jpg',
        wife_name: 'Rossf Velesquez',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'http://edwards-titleco.com/images/brownsville/Rosie_Martinez.jpg',
        kid1_name: 'Kalahe Velesquez',
        kid1_POB: 'Miami, USA',
        kid1_image: 'https://i.pinimg.com/736x/3f/58/8c/3f588cce44ccd710339a44352d3c3cee--velez-movember.jpg',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Spencerd Carlie',
        husband_POB: 'Brasilia, Brasil',
        husband_image: 'https://www.troy.edu/misstroy/assets/images/2017/carlie-spencer.jpg',
        wife_name: 'Rosac Martin',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'http://dnn.ivietech.net/portals/0/Providers/EriseldaLizarraga.png',
        kid1_name: 'Kaylahb Carlie',
        kid1_POB: 'Miami, USA',
        kid1_image: 'https://cdn.pixabay.com/photo/2016/05/23/14/06/girl-1410404_960_720.jpg',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Michaela Nissen',
        husband_POB: 'Brasilia, Brasil',
        husband_image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAsQAAAAJDY5NGM4OWZmLWVhMzQtNDEyYS05NGQyLTBkYWUyZDk4ZTQyOA.jpg',
        wife_name: 'Michellez Martinez',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'http://entertainmentbureau.com.au/wp-content/uploads/2013/05/Michelle_Martinez.jpg',
        kid1_name: 'Paolay Velezquez',
        kid1_POB: 'Miami, USA',
        kid1_image: 'https://static1.squarespace.com/static/56c3780a01dbae0dedb433a4/58dea3da9de4bb1ab1e7cbbb/58d9544e1b10e366b437b967/1490637906687/Blanca+Azucena+Velasquez+Matute+1-1.jpg?format=500w',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Redx Badger',
        husband_POB: 'Brasilia, Brasil',
        husband_image: 'https://d1t3gia0in9tdj.cloudfront.net/photo/tributes/t/8/r/207x207/4247477/Granville-Barger-1491587601.png',
        wife_name: 'Laurenw Badger',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'https://pbs.twimg.com/profile_images/621193147524091904/j5uPP-hL.jpg',
        kid1_name: 'Katherinev Badger',
        kid1_POB: 'Miami, USA',
        kid1_image: 'http://jcbba.com/wp-content/uploads/2015/10/IMG_0481.jpg',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Brandonu Brown',
        husband_POB: 'Brasilia, Brasil',
        husband_image: 'https://media.poetryfoundation.org/m/image/1893/Brandown%20Brown.jpg?w=1200&h=1200&fit=max',
        wife_name: 'Blancat Perez',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'https://d1t3gia0in9tdj.cloudfront.net/photo/tributes/t/8/r/207x207/2950355/Rosie-Martinez-1430904480.jpg',
        kid1_name: 'Kays Brown',
        kid1_POB: 'Miami, USA',
        kid1_image: 'http://kaybrownphotography.com/ClientData/Themes/10072/Slider/XQ3U4091%20rt%203.jpg',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Stever Jhonson',
        husband_POB: 'Brasilia, Brasil',
        husband_image: 'https://img.stackshare.io/user/108734/6104558.jpeg',
        wife_name: 'Cleareq Jhonson',
        wife_POB: 'Las Vegas, USA',
        wife_image: 'http://www.northlandfamilycounselling.com/wp-content/uploads/2016/12/Claire-Johnson-Photo.jpg',
        kid1_name: 'Mariahp Jhonson',
        kid1_POB: 'Miami, USA',
        kid1_image: 'http://www.scientistafoundation.com/uploads/3/6/0/9/3609607/4312356.jpg?1416346214',
        kid2_name: '',
        kid2_POB: '',
        kid2_image: '',
        kid3_name: '',
        kid3_POB: '',
        kid3_image: '',
        kid4_name: '',
        kid4_POB: '',
        kid4_image: ''
      }, 
      {
        husband_name: 'Benjamin Awado',
        husband_POB: 'Hollywood, USA',
        husband_image: 'https://benjaminfedwards.com/wp-content/uploads/2015/04/Mohammad-Awad-Eljied.png',
        wife_name: 'Rutelien Awad',
        wife_POB: 'Tokyo, Japan',
        wife_image: 'http://cf.ltkcdn.net/makeup/images/std/147101-364x425-Asian-Beauty.jpg',
        kid1_name: 'Sayom Narah',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: 'https://pbs.twimg.com/profile_images/3752973927/7e8fc2f0b4df17283813a2ef57230f55.jpeg',
        kid2_name: 'Blindl Dao',
        kid2_POB: 'Colorado, USA',
        kid2_image: '',
        kid3_name: 'Juliek Jingle',
        kid3_POB: 'Colorado, USA',
        kid3_image: '',
        kid4_name: 'Twainj Wong',
        kid4_POB: 'Colorado, USA',
        kid4_image: ''
      }, 
      {
        husband_name: 'Ronw White',
        husband_POB: 'Hollywood, USA',
        husband_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ron_White01.jpg/220px-Ron_White01.jpg',
        wife_name: 'Mikev White',
        wife_POB: 'Tokyo, Japan',
        wife_image: '',
        kid1_name: 'Sadathu White',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: '',
        kid2_name: 'Greent Gou',
        kid2_POB: 'Colorado, USA',
        kid2_image: '',
        kid3_name: 'Chings Gone',
        kid3_POB: 'Colorado, USA',
        kid3_image: '',
        kid4_name: 'Jackier Lee',
        kid4_POB: 'Colorado, USA',
        kid4_image: ''
      }, 
      {
        husband_name: 'Lionelq Riche',
        husband_POB: 'Hollywood, USA',
        husband_image: 'https://img.discogs.com/doAGQ8xhyUpqsLEvto0b0sKafMk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-69722-1500196110-9280.jpeg.jpg',
        wife_name: 'Frankp Richie',
        wife_POB: 'Tokyo, Japan',
        wife_image: '',
        kid1_name: 'Ricko Richie',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: '',
        kid2_name: 'Jimmien Richie',
        kid2_POB: 'Colorado, USA',
        kid2_image: '',
        kid3_name: 'Guacam Tay',
        kid3_POB: 'Colorado, USA',
        kid3_image: '',
        kid4_name: 'Leel Jack',
        kid4_POB: 'Colorado, USA',
        kid4_image: ''
      }, 
      {
        husband_name: 'Rodk Stewart',
        husband_POB: 'Hollywood, USA',
        husband_image: 'https://necropedia.org/jdd/public/documents/celebrities/804.jpg',
        wife_name: 'Sayong Stewart',
        wife_POB: 'Tokyo, Japan',
        wife_image: '',
        kid1_name: 'Ramsj Stewart',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: '',
        kid2_name: 'Rodolphi Stewart',
        kid2_POB: 'Colorado, USA',
        kid2_image: '',
        kid3_name: 'Chin Chuh Lancha',
        kid3_POB: 'Colorado, USA',
        kid3_image: '',
        kid4_name: 'Moog Lee',
        kid4_POB: 'Colorado, USA',
        kid4_image: ''
      }, 
      {
        husband_name: 'Abb Nigtsf',
        husband_POB: 'Hollywood, USA',
        husband_image: 'http://l7.alamy.com/zooms/acb4d87cfa3249bd953ec6d8274f3741/boogie-nights-1997-mark-wahlberg-boog-061-bkabbx.jpg',
        wife_name: 'Sho Awade',
        wife_POB: 'Tokyo, Japan',
        wife_image: '',
        kid1_name: 'Miley Sirusd',
        kid1_POB: 'Las Vegas, USA',
        kid1_image: '',
        kid2_name: 'Leo Markc',
        kid2_POB: 'Colorado, USA',
        kid2_image: '',
        kid3_name: 'Guyen Hoangb',
        kid3_POB: 'Colorado, USA',
        kid3_image: '',
        kid4_name: 'Ching Wonga',
        kid4_POB: 'Colorado, USA',
        kid4_image: ''
      }
    ]);
  });
};
