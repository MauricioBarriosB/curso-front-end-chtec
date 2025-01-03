import PropTypes from "prop-types";

function Button({label, onClick, desc }) {
  return (
    <button className="btn btn-primary m-2" data-label={label} onClick={onClick} data-desc={desc}>
      {label} &raquo;
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  desc: PropTypes.string
};

export default Button;
