import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FavsContext } from '../../context/favsContext';
import { addFav, deleteFav } from '../../services/favs.service';

const FilmCard = ({ film }) => {

  const { favs, setFavs } = useContext(FavsContext);

  // -> añadir favorito al DB
  const add = async (filmId) => {
    await addFav(filmId);
    setFavs((prevFavs) => [...prevFavs, filmId?.toString()]);
  };

  // -> eliminar del favorito al DB
  const remove = async (filmId) => {
    await deleteFav(filmId);
    setFavs((prevFavs) =>
      prevFavs.filter((favId) => favId !== filmId?.toString())
    );
  };

  const toggleFav = async (id) => {
    const idToString = id.toString();
    if (favs?.includes(idToString)) {
      await remove(idToString);
    } else {
      await add(idToString);
    }
  };

  return (
    <div className="filmcard">
      {favs?.includes(film?.id?.toString()) ? (
        <FaHeart
          onClick={() => toggleFav(film.id)}
          size={20}
          style={{
            position: 'absolute',
            right: 0,
            zIndex: 50,
            marginRight: '10px',
            marginTop: '10px',
            color: 'red',
          }}
        />
      ) : (
        <FaRegHeart
          onClick={() => toggleFav(film.id)}
          size={20}
          style={{
            position: 'absolute',
            right: 0,
            zIndex: 50,
            marginRight: '10px',
            marginTop: '10px',
            color: 'red',
          }}
        />
      )}
      <Link to={`/film/${film.id}`}>
        <div className="filmcard">
          <div
            className="filmcardarea"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${film.poster_path})`,
            }}
          >
            <div className="filmcardelem">
              <h1>{film.title}</h1>
              <span>
                <FaStar
                  size={15}
                  style={{ color: '#e2d13b', marginRight: '5px' }}
                />
                {film.vote_average}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FilmCard;

FilmCard.propTypes = {
  film: PropTypes.object,
};

/* {
    adult: false,
    backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    genre_ids: [ 878, 12 ],
    id: 693134,
    original_language: 'en',
    original_title: 'Dune: Part Two',
    overview: 
      'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.',
    popularity: 4004.451,
    poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    release_date: '2024-02-27',
    title: 'Dune: Part Two',
    video: false,
    vote_average: 8.307,
    vote_count: 2837
  } */
