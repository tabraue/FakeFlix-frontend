import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FavsContext } from '../context/favsContext';
import { getAllFavs } from '../services/favs.service';

const Layout = () => {
  const [favs, setFavs] = useState(null); // favs es el array con todos los ids :string
  const favValues = { favs, setFavs };

  console.log(favs)

  const getFavs = async () => {
    const res = await getAllFavs()
    setFavs(res)
    //return res
  }

  useEffect(() => {
    getFavs()
  }, [])
  
  return (
    <FavsContext.Provider value={favValues}>
      <div className="layout">
        <Header />
        <main className="outlet">
          <Outlet />
        </main>
        <Footer />
      </div>
    </FavsContext.Provider>
  );
};

export default Layout;
