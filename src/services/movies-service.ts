import {
  createMovie,
  deleteMovie,
  updateMovie,
  getMovies,
  getMovieId
} from '../repositories/movie-repository'
import httpStatus from 'http-status'

export async function getMoviesService() {
  const movie = await getMovies()

  return movie
}

export async function createMovieService(
  name: string,
  year: number,
  director: string,
  studio: string
) {
  const movie = await createMovie(name, year, director, studio)

  return movie
}

export async function updateMovieService(id: number) {
  const result = await getMovieId(id)

  if ((result.rowCount = 0)) {
    throw {
      code: httpStatus.NOT_FOUND
    }
  }
  await updateMovie(id)
  return {
    response: 'Filme atualizado com sucesso',
    code: httpStatus.OK
  }
}

export async function deleteMovieService(id: number) {
  const result = await getMovieId(id)

  if ((result.rowCount = 0)) {
    throw {
      code: httpStatus.NOT_FOUND
    }
  }

  await deleteMovie(id)
  return {
    response: 'Filme deletado com sucesso',
    code: httpStatus.OK
  }
}
