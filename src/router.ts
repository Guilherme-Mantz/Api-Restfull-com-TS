import { Router, Request, Response } from 'express';
import { createMovie, getAllMovies, getMovie, removeMovie, updateMovie } from './controller/movieController';
import { validate } from './middleware/Validator';
import { createValidator } from './middleware/movieValidation';

const router = Router();

export default 
router.get('/teste', (req: Request, res: Response) => {res.send('Ola')})
.post('/movie',createValidator(), validate, createMovie)

.get('/movie/:id', getMovie)

.get('/movies', getAllMovies)

.delete('/movie/:id', removeMovie)

.patch('/movie/:id',createValidator(), validate, updateMovie)