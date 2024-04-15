import { MdOutlineMail } from 'react-icons/md';
import { PropTypes } from 'prop-types';
import './inputs.css';

const Email = ({ onChange }) => {

  const handleChange = (e) => {
    if(onChange) onChange(e.target.value)
  };

  return (
    <div>
      <label htmlFor="email" className="emailLabel">
        Email
      </label>
      <div style={{ position: 'relative' }}>
        <div className="inputemailcontainer">
          <MdOutlineMail
            size={20}
            style={{ marginRight: '5px', color: '#910f0f' }}
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          required
          className="emailInput"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Email;

Email.propTypes = {
  onChange: PropTypes.func
}