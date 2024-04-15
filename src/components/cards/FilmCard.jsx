import { PropTypes } from 'prop-types';
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const FilmCard = ({ film }) => {

  return (
    <div className="filmcard">
      <FaRegHeart size={20}
            style={{ marginRight: '5px', color: '#910f0f' }}/>
      <FaHeart size={20}
            style={{ marginRight: '5px', color: '#910f0f' }}/>
      <div
        className="filmcardarea"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${film.poster_path})`,
        }}
      >
        <div className="filmcardelem">
          <h1>{film.original_title}</h1>
          {/* <p>{film.overview}</p> */}
          <FaStar size={20}
            style={{  color: '#e2d13b' }}/>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;

FilmCard.propTypes = {
  film: PropTypes.object
}