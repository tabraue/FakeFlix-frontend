import { useContext, useEffect, useState } from 'react';
import { FavsContext } from '../context/favsContext';
import { getFilmById } from '../services/film.service';
import FilmCard from '../components/cards/FilmCard';

const Profile = () => {
  const { favs, setFavs } = useContext(FavsContext);
  const [films, setFilms] = useState([]);

  //const favvv =  [ '984324', '654739', 'waefwe' ]
  //console.log(favs);

  const getFilm = async (id) => {
    const res = await getFilmById(id);
    return res;
  };

  useEffect(() => {
    if (favs?.length > 0) {
      const getFilms = async () => {
        const promises = favs.map((id) => getFilm(id));
        const filmsData = await Promise.all(promises);
        setFilms(filmsData /* .filter((film) => film != null) */);
      };
      getFilms();
    }
  }, [favs]);

  return (
    <>
      <h1>Tus pelis favoritas</h1>
      <div className="profile">
        {films &&
          films?.map((film, idx) => {
            return <FilmCard key={idx} film={film} />;
          })}
      </div>
    </>
  );
};

export default Profile;
