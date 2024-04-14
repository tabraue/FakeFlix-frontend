import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="outlet">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
