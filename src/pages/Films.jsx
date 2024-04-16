import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllFilmsByGenre } from '../services/film.service';
import FilmCard from '../components/cards/FilmCard';

const Films = () => {
  const { genreId } = useParams();
  const [films, setFilms] = useState([]);

  const filmsByGenre = async (genreId) => {
    const res = await getAllFilmsByGenre(genreId);
    setFilms(res);
  };

  useEffect(() => {
    filmsByGenre(genreId);
  }, []);

  return (
    <div className="filmcontainer">
      <h1>Aquí te presentamos la lista de películas</h1>
      <div className="filmmap">
        {films &&
          films.map((el, idx) => {
            return <FilmCard film={el} key={idx} />;
          })}
      </div>
    </div>
  );
};

export default Films;
