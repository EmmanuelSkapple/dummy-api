"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovie = exports.setMovieList = exports.getMovies = void 0;
const getMovies = (db) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieSnapshot = yield db
            .collection("Movies").get();
        const moviesList = movieSnapshot.docs.map((doc) => (Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
        return {
            status: 200,
            moviesList: moviesList.reverse()
        };
    }
    catch (error) {
        console.log("error getMovies => ", error);
        return { status: 505, errorMessage: error };
    }
});
exports.getMovies = getMovies;
const setMovieList = (movieList, db) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const batch = db.batch();
        movieList.forEach((movie) => {
            const movieRef = db.collection('Movies').doc();
            batch.set(movieRef, movie);
        });
        yield batch.commit();
        return {
            status: 200,
            message: 'Movie list added successfully'
        };
    }
    catch (error) {
        console.log("error setMovieList => ", error);
        return { status: 505, errorMessage: error };
    }
});
exports.setMovieList = setMovieList;
const addMovie = (movie, db) => {
    try {
        if (!movie.title || !movie.year || !movie.rating || !movie.image) {
            throw new Error('Missing fields');
        }
        const newMovie = db.collection('Movies').doc();
        newMovie.set(movie);
        return {
            status: 200,
            newMovie
        };
    }
    catch (error) {
        console.log("error addMovie => ", error);
        return { status: 505, errorMessage: error };
    }
};
exports.addMovie = addMovie;
