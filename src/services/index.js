import axios from 'axios'

export const movieDB = axios.create({
  baseURL: import.meta.env.VITE_MOVIEDB_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: 'en-EN',
  },
  timeout: 3000,
});


export const api = axios.create({
  baseURL: import.meta.env.VITE_MONGO_URL,
});