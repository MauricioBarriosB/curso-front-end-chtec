import PropTypes from "prop-types";

function Button({label, onClick }) {
  return (
    <button className="btn btn-primary m-2" data-label={label} onClick={onClick}>
      {label} &raquo;
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
