import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 my-2">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          name={property.name}
          location={property.location}
          price={property.price}
        />
      ))}
    </div>
  );
}

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default PropertyList;