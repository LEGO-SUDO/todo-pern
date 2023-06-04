const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'zdsm#123#N',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
})
module.exports = pool
