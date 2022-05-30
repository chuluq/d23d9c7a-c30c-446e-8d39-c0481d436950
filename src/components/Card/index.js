import PropTypes from "prop-types";
import Rating from "components/Rating";
import "./styles.css";

const Card = ({ image, ratingNo, name }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={image} alt={name} className="image" />
        <div className="rating">
          <Rating ratingNo={ratingNo} />
        </div>
      </div>
      <div className="detail">
        <p>{name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  ratingNo: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
