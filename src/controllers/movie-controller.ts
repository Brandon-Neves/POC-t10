import { Request, Response } from 'express'
import httpStatus from 'http-status'
import {
  createMovieService,
  deleteMovieService,
  getMoviesService,
  updateMovieService
} from 'services/movies-service'

export async function createMovie(req: Request, res: Response) {
  const { name, year, director, studio } = req.body
  try {
    await createMovieService(name, year, director, studio)
    res.status(httpStatus.OK).send('Filme criado com sucesso')
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(console.log(error))
  }
}

export async function getMovie(req: Request, res: Response) {
  try {
    const movies = await getMoviesService()
    res.send(movies)
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(console.log(error))
  }
}

export async function updateMovie(req: Request, res: Response) {
  const id: number = Number(req.params.id)
  try {
    const { response, code } = await updateMovieService(id)
    res.status(code).send(response)
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(console.log(error))
  }
}

export async function deleteMovie(req: Request, res: Response) {
  const id: number = Number(req.params.id)
  try {
    const { response, code } = await deleteMovieService(id)
    res.status(code).send(response)
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(console.log(error))
  }
}
