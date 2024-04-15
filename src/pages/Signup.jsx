import { useState } from 'react';
import { Link } from 'react-router-dom';
import Email from '../components/inputs/Email.jsx';
import InputCustom from '../components/inputs/InputCustom.jsx';
import Password from '../components/inputs/Password.jsx';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleName = (name) => {
    setName(name);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleSignup = () => {
    alert('hay que hacer el signup');
  };

  return (
    <form className="signupcard bkg">
      <div className="signuparea">
        <div className="signupareaelem">
          <h1>Regístrate</h1>
          <InputCustom onChange={handleName} />
          <Email onChange={handleEmail} />
          <Password onChange={handlePassword} />
          <div className="signupbtnarea">
            <Link to={'/login'} className="link">
              Ya tengo una cuenta.
            </Link>
            <div className='signupcb'>
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
    </form>
  );
};

export default Signup;
