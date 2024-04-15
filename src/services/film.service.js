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
      `/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`
    );
    console.log(data);
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
    throw new Error('Error showing latest film');
  }
};
