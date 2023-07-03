import {
  createMovie,
  deleteMovie,
  getMovie,
  updateMovie
} from 'controllers/movie-controller'
import { Router } from 'express'

const movieRouter = Router()

movieRouter.get('/movies', getMovie)
movieRouter.post('/movies', createMovie)
movieRouter.put('/movies/:id', updateMovie)
movieRouter.delete('/movies/:id', deleteMovie)

export default movieRouter
