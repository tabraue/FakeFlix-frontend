import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerDiv">
        <Link to={'/'}>
          <img
            src="/fakeflixlogo.png"
            alt="Fake Flix Logo"
          />
        </Link>
        <div className="headerBtn">
            <Link to={'/login'}>Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Header