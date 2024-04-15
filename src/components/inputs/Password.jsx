import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Password = ({ onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password" className="passwordLabel">
        Contraseña
      </label>
      <div style={{ position: 'relative' }}>
        <div className="inputpasswordcontainer" onClick={handleShowPassword}>
          {showPassword ? (
            <FaEye size={20} style={{ color: '#1b6b2c', cursor: 'pointer' }} />
          ) : (
            <FaEyeSlash size={20} style={{ color: '#910f0f', cursor: 'pointer' }} />
          )}
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          required
          className="passwordInput"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Password;

Password.propTypes = {
  onChange: PropTypes.func,
};
