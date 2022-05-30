import PropTypes from "prop-types";
import "./styles.css";

const Card = ({ image, name }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={image} alt={name} className="image" />
      </div>
      <div className="detail">
        <p>{name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
