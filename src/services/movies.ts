import admin from 'firebase-admin';
import { moviesTypes } from "../types/moviesTypes";



export const getMovies = async(db : admin.firestore.Firestore) => {
    try {
        const movieSnapshot  = await db
          .collection("Movies").get();
        const moviesList = movieSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        })) as moviesTypes[];
     
        return {
          status: 200,
          moviesList: moviesList.reverse() 
        };
      } catch (error) {
        console.log("error getMovies => ", error);
          return { status: 505, errorMessage: error };
      }
}

export const setMovieList = async (movieList: moviesTypes[], db : admin.firestore.Firestore) => {
    
    try{
        const batch = db.batch();
        movieList.forEach((movie) => {
            const movieRef = db.collection('Movies').doc();
            batch.set(movieRef, movie);
        });
        await batch.commit();
        return {
            status: 200,
            message: 'Movie list added successfully'
        };
    } catch(error) {
        console.log("error setMovieList => ", error);
        return { status: 505, errorMessage: error };
    }
}


export const addMovie = (movie: moviesTypes, db : admin.firestore.Firestore) => {
    try{
        if(!movie.title || !movie.year || !movie.rating || !movie.image) {
            throw new Error('Missing fields');
        }
        const newMovie = db.collection('Movies').doc();
        newMovie.set(movie);
        return {
            status: 200,
            newMovie
        };
      
    } catch(error) {
        console.log("error addMovie => ", error);
        return { status: 505, errorMessage: error };
    }
}



