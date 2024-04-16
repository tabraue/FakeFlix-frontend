import { useState } from 'react';
import Email from '../inputs/Email.jsx';
import Password from '../inputs/Password.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service.js';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res) {
      navigate('/home');
    }
  };

  return (
    <div className="logincard">
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
    </div>
  );
};

export default LoginCard;
