import { Router } from 'express'
import movieRouter from './movie.router'

const router = Router()

router.get('/health', (req, res) => {
  res.send('Server is running')
})
router.use(movieRouter)

export default router
