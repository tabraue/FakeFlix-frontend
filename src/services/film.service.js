import movieDB from '.';

// Genre -> Movie list
// https://developer.themoviedb.org/reference/genre-movie-list
export const getAllFilmGenres = async () => {
  try {
    const { data } = await movieDB.get('/genre/movie/list');
    return data.genres;
  } catch (error) {
    console.log(error);
    throw new Error('Error showing all film categories');
  }
};

// Discover -> Movie
// https://developer.themoviedb.org/reference/discover-movie
export const getAllFilmsByGenre = async (genreId) => {
  try {
    const { data } = await movieDB.get(
      `/discover/movie?include_adult=false&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`
    );
    return data.results
  } catch (error) {
    console.log(error);
    throw new Error('Error showing all films by category');
  }
};

// Movie list -> Now Playing
// https://developer.themoviedb.org/reference/movie-now-playing-list
export const latestFilm = async () => {
  try {
    const { data } = await movieDB.get('movie/now_playing');
    return data.results[0];
  } catch (error) {
    console.log(error);
    throw new Error('Error showing latest film');
  }
};


// Movies -> Details
// https://developer.themoviedb.org/reference/movie-details
export const getFilmById = async (movieId) => {
  try {
    const { data } = await movieDB.get(`/movie/${movieId}`)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(`Error showing film with id ${movieId}`);
  }
}