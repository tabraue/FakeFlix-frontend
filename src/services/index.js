import axios from 'axios'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b19ffead0d20751b58ebdf8a4e8d9246',
    language: 'en-EN',
  },
  timeout: 3000,
});

export default movieDB;
