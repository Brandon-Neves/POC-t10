import pg from 'pg'

const db = new pg.Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'movies',
  port: 5432
})

export default db
