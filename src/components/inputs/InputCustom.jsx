import { PropTypes } from 'prop-types';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';

const InputCustom = ({ onChange }) => {
  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="username" className="nameLabel">
        Nombre
      </label>
      <div style={{ position: 'relative' }}>
        <div className="inputnamecontainer">
          <PiPersonArmsSpreadFill
            size={20}
            style={{ marginRight: '5px', color: '#910f0f' }}
          />
        </div>
        <input
          type="username"
          name="text"
          id="username"
          placeholder="Diana"
          required
          className="nameInput"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputCustom;

InputCustom.propTypes = {
  onChange: PropTypes.func,
};
