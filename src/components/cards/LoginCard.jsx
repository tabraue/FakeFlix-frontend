import { useState } from 'react';
import Email from '../inputs/Email.jsx';
import Password from '../inputs/Password.jsx';
import { Link } from 'react-router-dom';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleLogin = () => {
    alert('hay que hacer login')
  };

  return (
    <form className="logincard" >
      <div className="imgcontainer">
        <img
          src="https://source.unsplash.com/random?film,movie,serie"
          alt="film"
        />
      </div>

      <div className="loginarea">
        <div className="loginareaelem">
          <h1>Log in</h1>
          <Email onChange={handleEmail} />
          <Password onChange={handlePassword} />
          <div className="loginbtnarea">
            <Link to={'/signup'} className="link">
              Quiero crearme una cuenta.
            </Link>
            <button onClick={handleLogin}>Entrar</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginCard;
