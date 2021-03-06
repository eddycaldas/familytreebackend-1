require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/familytreebackend1',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
