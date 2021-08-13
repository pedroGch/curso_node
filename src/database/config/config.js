const DATABASE_URL = process.env.DATABASE_URL
module.exports = {
  "development": {
    "username": "postgres",
    "password": "1990",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "url": DATABASE_URL,
    "dialect": "postgres"
  }
}
