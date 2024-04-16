import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { getAllFilmGenres, latestFilm } from '../services/film.service';
import { Link } from 'react-router-dom';
import InputCustom from '../components/inputs/InputCustom';
import FilmCard from '../components/cards/FilmCard';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [categorySearch, setCategorySearch] = useState('');
  const [filteredCategory, setFilteredCategory] = useState([])
  const [latest, setLatest] = useState([]);


  // -> servicio para traer todas las categorias de pelis
  const showCategories = async () => {
    const res = await getAllFilmGenres();
    setCategory(res);
    setFilteredCategory(res)
  };
  
  // -> servicio para traer la ultima peli 
  const showLatest = async () => {
    const res = await latestFilm();
    setLatest(res);
  };

  // -> useEffect para los 2 servicios anteriores
  useEffect(() => {
    showCategories();
    showLatest();
  }, []);

  // -> barra de búsqueda
  const handleSearch = (e) => {
    setCategorySearch(e.target.value);
  };

  // -> función para buscar categoría
  const findCategory = () =>  {
    if(categorySearch.length > 0){
      const searching = categorySearch.charAt(0).toUpperCase() + categorySearch.slice(1).toLowerCase()
      const result = category.filter((el) => {
        return el.name.includes(searching)
      })
      setFilteredCategory(result)
    }else {
      setFilteredCategory(category)
    }
  }

  // se ejecutará siempre que se teclee en la barra buscadora
  useEffect(() => {
    findCategory();
  }, [categorySearch]);

  return (
    <div className="home">
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
        {filteredCategory &&
          filteredCategory.map((el, idx) => (
            <button key={idx} className="chip">
              <Link to={`/films/${el.id}`} className="link">
                {el.name}
              </Link>
            </button>
          ))}
      </div>
      <hr style={{ width: '500px' }} />
      <h2>La última peli en aterrizar es...</h2>
      <h3>{latest.original_title}</h3>
      <FilmCard film={latest} />
    </div>
  );
};

export default Home;
