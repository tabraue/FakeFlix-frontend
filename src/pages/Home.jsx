import { useState } from 'react';
import { useEffect } from 'react';
import { getAllFilmGenres, latestFilm } from '../services/film.service';
import { Link } from 'react-router-dom';
import InputCustom from '../components/inputs/InputCustom';
import FilmCard from '../components/cards/FilmCard';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [categorySearch, setCategorySearch] = useState('');
  const [latest, setLatest] = useState([])

  const handleSearch = (search) => {
    setCategorySearch(search);
  };

  const showCategories = async () => {
    const res = await getAllFilmGenres();
    setCategory(res);
  };

  const showLatest = async () => {
    const res = await latestFilm()
    setLatest(res)
  }

  useEffect(() => {
    showCategories();
    showLatest()
  }, []);

  return (
    <div className='home'>
      <h1>Bienvenida a Fakeflix</h1>
      <h2>¿Qué quieres ver hoy?</h2>
      <InputCustom
        onChange={handleSearch}
        placeholder="Animation"
        type="text"
        icon="search"
        id="searchbar"
      />
      <div className="chip-container">
        {category &&
          category.map((el, idx) => (
            <button key={idx} className="chip">
              <Link to={''} className="link">
                {el.name}
              </Link>
            </button>
          ))}
      </div>
      <hr style={{width: '500px'}}/>
      <h2>La última peli en aterrizar es...</h2>
      <h3>{latest.original_title}</h3>
      <FilmCard film={latest}/>
    </div>
  );
};

export default Home;
