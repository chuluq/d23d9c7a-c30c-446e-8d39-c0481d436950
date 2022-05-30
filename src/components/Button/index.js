import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ title, handleClick }) => {
  return (
    <button type="button" className="btn" onClick={handleClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
