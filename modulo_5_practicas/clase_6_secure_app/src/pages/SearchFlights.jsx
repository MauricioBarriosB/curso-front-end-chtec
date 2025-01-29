import { useState } from "react";
import { getFlights } from "../services/api";
import MainLayout from "../layouts/MainLayout";

const SearchFlights = () => {
  const [query, setQuery] = useState("");
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  const sanitizeInput = (input) => {
    const div = document.createElement("div");
    div.innerText = input;
    return div.innerHTML;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const sanitizeQuery = sanitizeInput(query);
      const allFlights = await getFlights();
      const filteredFlights = allFlights.filter(
        (flight) =>
          flight.origin.toLowerCase().includes(sanitizeQuery.toLowerCase()) ||
          flight.destination.toLowerCase().includes(sanitizeQuery.toLowerCase())
      );
      setFlights(filteredFlights);
      if (filteredFlights.length === 0) {
        setError("Error al buscar vuelos. Intenta nuevamente.");
      }
    } catch (error) {
      setError("Error al buscar vuelos. Intenta nuevamente. " + error);
    }
  };
  return (
    <MainLayout>
      <h1>Buscar Vuelos</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          Origen:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Chimbarongo"
          />
        </label>
        <button type="submit">Buscar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.origin} =&gt; {flight.destination} - ${flight.price}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default SearchFlights;
