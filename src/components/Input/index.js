import PropTypes from "prop-types";
import "./styles.css";

const Input = ({ type, placeholder, leftIcon, handleChange }) => {
  return (
    <div className="input_group">
      <div className="leftIcon">{leftIcon && leftIcon}</div>
      <input
        className="input"
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  leftIcon: PropTypes.element.isRequired,
};

export default Input;
