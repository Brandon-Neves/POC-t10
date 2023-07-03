import Joi from 'joi'

interface movies {
  name: string
  year: number
  director: string
  studio: string
}

export const movieSchema = Joi.object<movies>({
  name: Joi.string().required(),
  year: Joi.number().required(),
  director: Joi.string().required(),
  studio: Joi.string().required()
})
