import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerDiv">
        <Link to={'/'}>
          <img src="/fakeflixlogo.png" alt="Fake Flix Logo" />
        </Link>
        <Link to={'/login'} className="linkbtn">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Header;
