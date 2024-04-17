import { Link, useNavigate } from 'react-router-dom';
import { GrUserFemale } from "react-icons/gr";

const Header = () => {
  const navigate = useNavigate();

  const token = () => {
    return localStorage.getItem('token') ? true : false
  }

  const logout = () => {
    localStorage.removeItem('token');
    return navigate('/login');
  };
  return (
    <div className="headerContainer">
      <div className="headerDiv">
        <Link to={`${token()}` ? '/home' : '/' }>
          <img src="/fakeflixlogo.png" alt="Fake Flix Logo" />
        </Link>
        {token() ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <Link to={'/profile'}>
            <GrUserFemale size={20} style={{color: 'white',  verticalAlign: 'middle', marginRight: '10px'}}/>
           </Link>    
            <Link className="linkbtn" onClick={logout}>
              Log Out
            </Link>
          </div>
        ) : (
          <Link to={'/login'} className="linkbtn">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
