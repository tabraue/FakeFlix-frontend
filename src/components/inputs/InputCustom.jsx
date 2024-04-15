import { PropTypes } from 'prop-types';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';
import { FaSearch } from 'react-icons/fa';

const InputCustom = ({ onChange, placeholder, type, id, icon, label }) => {
  const showIcon = (icon) => {
    switch (icon) {
      case 'person':
        return (
          <PiPersonArmsSpreadFill
            size={20}
            style={{ marginRight: '5px', color: '#910f0f' }}
          />
        );
      case 'search':
        return (
          <FaSearch
            size={20}
            style={{ marginRight: '5px', color: '#910f0f' }}
          />
        );
      default:
        break;
    }
  };

  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="nameLabel">
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <div className="inputnamecontainer">{showIcon(icon)}</div>
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
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
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};
