import db from 'database/database'

export async function getMovieId(id: number) {
  const query = `SELECT * FROM movies WHERE "id" = $1`
  const values = [id]
  const result = await db.query(query, values)

  return result
}

export async function createMovie(
  name: string,
  year: number,
  director: string,
  studio: string
) {
  const query = `INSERT INTO movies ("name", "year", "director", "studio"), VALUES ($1, $2, $3, $4)`
  const values = [name, year, director, studio]
  const result = await db.query(query, values)

  return result.rows
}

export async function getMovies() {
  const query = `SELECT * FROM movies`
  const result = await db.query(query)

  return result.rows
}

export async function updateMovie(id: number) {
  const query = `UPDATE movies WHERE "id" = $2`
  const values = [id]
  const result = await db.query(query, values)

  return result.rows
}

export async function deleteMovie(id: number) {
  const query = `DELETE FROM movies WHERE "id" = $2`
  const values = [id]
  const result = await db.query(query, values)

  return result.rowCount
}
