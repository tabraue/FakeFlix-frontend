import {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Email from '../components/inputs/Email.jsx';
import InputCustom from '../components/inputs/InputCustom.jsx';
import Password from '../components/inputs/Password.jsx';
import { signup } from './../services/auth.service';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleName = (name) => {
    setName(name.target.value);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleSignup = async () => {
    if (name && email && password && isChecked) {
      const res = await signup(name, email, password);
      if (res) {
        navigate('/login');
      }
    } else {
      alert('Revisa la info pls!');
    }
  };

  return (
    <div className="signupcard bkg">
      <div className="signuparea">
        <div className="signupareaelem">
          <h1>Regístrate</h1>
          <InputCustom
            onChange={handleName}
            placeholder="Diana"
            type="text"
            id="userName"
            icon="person"
            label="Nombre"
          />
          <Email onChange={handleEmail} />
          <Password onChange={handlePassword} />
          <div className="signupbtnarea">
            <Link to={'/login'} className="link">
              Ya tengo una cuenta.
            </Link>
            <div className="signupcb">
              <input
                id="link-checkbox"
                type="checkbox"
                value="own"
                className="checkBox"
                required
                checked={isChecked}
                onChange={handleChecked}
              />
              <label htmlFor="link-checkbox" className="">
                Confirmo haber leído todo, todito.
              </label>
            </div>
            <button onClick={handleSignup}>Registrarme</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
