import PropTypes from "prop-types";

function PropertyCard({ name, location, price }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5>{name}</h5>
          <p>{location}</p>
          <p>$ {price}</p>
        </div>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
};

export default PropertyCard;