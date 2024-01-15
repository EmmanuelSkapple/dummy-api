import express from 'express';
import { addMovie, getMovies } from '../services/movies';
const router = express.Router();

router.get('/get',async (req, res)=> {
    const db = req.db;
    const response = await getMovies(db);
    if(!response?.moviesList?.length) return res.status(404).json({ error: `No movies found`});
    return res.status(200).json({moviesList:response.moviesList})
})

router.post('/create',async (req, res)=> {
    const movie = req.body.movie;
    const db = req.db;
    movie.id = Date.now().toString();
    const response = addMovie(movie,db);
    if(response.status === 200) return res.status(200).json({ message: `Movie added successfully`});
    return res.status(400).json({ error: `Error adding movie`});
})




export default router;