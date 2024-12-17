import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import PropertyList from "./components/PropertyList";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // * Fetch data :
    setProperties([
      { id: 1, name: "Propiedad 1", location: "Dirección 1", price: 1000 },
      { id: 2, name: "Propiedad 2", location: "Dirección 2", price: 2000 },
      { id: 3, name: "Propiedad 3", location: "Dirección 3", price: 30000 },
      { id: 4, name: "Propiedad 4", location: "Dirección 4", price: 40000 },
      { id: 5, name: "Propiedad 5", location: "Dirección 5", price: 300 },
      { id: 6, name: "Propiedad 6", location: "Dirección 6", price: 6700 },
    ]);
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-center">PLATAFORMA INMOBILIARIA</h3>
      <div className="row">
        <div className="col">
          <PropertyList properties={properties} />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
