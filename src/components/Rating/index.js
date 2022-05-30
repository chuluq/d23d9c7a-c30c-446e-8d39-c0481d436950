import PropTypes from "prop-types";
import Star from "constants/icons/star";
import "./styles.css";

const Rating = ({ ratingNo }) => {
  return (
    <div className="rating">
      <Star color="#ffbd6d" />
      <p className="ratingNo">{ratingNo}</p>
    </div>
  );
};

Rating.propTypes = {
  ratingNo: PropTypes.string.isRequired,
};

export default Rating;
