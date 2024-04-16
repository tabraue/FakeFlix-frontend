import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilmById } from '../services/film.service';
import { MdAccessTime } from 'react-icons/md';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { FavsContext } from '../context/favsContext';
import { addFav, deleteFav } from '../services/favs.service';

const FilmDetail = () => {
  const { movieId } = useParams(); // :string
  const [film, setFilm] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const { favs } = useContext(FavsContext);

  //console.log(favs?.includes(movieId))

  // -> añadir favorito al DB
  const add = async (filmId) => {
    await addFav(filmId);
  };

  // -> eliminar del favorito al DB
  const remove = async (filmId) => {
    await deleteFav(filmId);
  };

  // -> cambiar de favorito a no favorito, aprovechando tb para la visualización
  const toggleFav = async () => {
    setIsFav(!isFav);
    if (isFav) {
      remove(movieId);
    } else {
      add(movieId);
      //setFavs([...favs, movieId])
    }
  };

  const filmById = async (movieId) => {
    const res = await getFilmById(movieId);
    setFilm(res);
  };

  useEffect(() => {
    filmById(movieId);
  }, []);

  useEffect(() => {
    setIsFav(favs?.includes(movieId));
  }, [movieId, favs]);

  return (
    <div className="filmdetailcontainer">
      <div className="infocontainer">
        <img
          src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
          alt={`${film.title} poster`}
        />
        <div>
          <h1>{film.original_title}</h1>
          <h3>{film.title}</h3>
          <div style={{ textAlign: 'right' }}>
            {isFav ? 'Remove from my favs' : 'Add to my favs'}
            {isFav ? (
              /* corazón completo */
              <FaHeart
                onClick={() => toggleFav(film.id)}
                size={20}
                style={{
                  color: 'red',
                  verticalAlign: 'middle',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            ) : (
              /* corazón bordeado */
              <FaRegHeart
                onClick={() => toggleFav(film.id)}
                size={20}
                style={{
                  color: 'red',
                  marginLeft: '10px',
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                }}
              />
            )}
          </div>
          <p>{film.overview}</p>
          <p>
            Genres:
            <ul>
              {film.genres &&
                film.genres.map((el, idx) => {
                  return (
                    <Link key={idx} to={`/films/${el.id}`}>
                      <li>{el.name}</li>
                    </Link>
                  );
                })}
            </ul>
          </p>
          <p>
            <MdAccessTime
              size={20}
              style={{ marginRight: '5px', verticalAlign: 'middle' }}
            />{' '}
            {film.runtime} min
          </p>
          <span>
            <FaStar
              size={15}
              style={{
                color: '#e2d13b',
                marginRight: '5px',
                verticalAlign: 'middle',
              }}
            />
            {film.vote_average} from {film.vote_count} votes.
          </span>
          <span>
            <a href={film.homepage} target="_blank" rel="noopener noreferrer">
              Film's homepage
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;

/**
 * {
    adult: false,
    backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    belongs_to_collection: {
      id: 726871,
      name: 'Dune Collection',
      poster_path: '/wcVafar6Efk3YgFvh8oZQ4yHL6H.jpg',
      backdrop_path: '/ygVSGv86R0BTOKJIb8RQ1sFxs4q.jpg'
    },
    budget: 190000000,
    genres: [ { id: 878, name: 'Science Fiction' }, { id: 12, name: 'Adventure' } ],
    homepage: 'https://www.dunemovie.com',
    id: 693134,
    imdb_id: 'tt15239678',
    origin_country: [ 'US' ],
    original_language: 'en',
    original_title: 'Dune: Part Two',
    overview: 
      'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.',
    popularity: 4004.451,
    poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    production_companies: [
      {
        id: 923,
        logo_path: '/8M99Dkt23MjQMTTWukq4m5XsEuo.png',
        name: 'Legendary Pictures',
        origin_country: 'US'
      }
    ],
    production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
    release_date: '2024-02-27',
    revenue: 683813734,
    runtime: 167,
    spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
    status: 'Released',
    tagline: 'Long live the fighters.',
    title: 'Dune: Part Two',
    video: false,
    vote_average: 8.308,
    vote_count: 2842
  }
 */
