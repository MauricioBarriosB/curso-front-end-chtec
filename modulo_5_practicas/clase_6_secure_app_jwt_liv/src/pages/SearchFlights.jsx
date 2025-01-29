import { useState } from "react";
import { getAllDoctors } from "../services/DocsApi";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

const SearchFlights = () => {
    const [query, setQuery] = useState("");
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null);
    const { jwt } = useAuth();

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

            const allFlights = await getAllDoctors(jwt);

            const filteredFlights = allFlights.content.filter(
                (flight) =>
                    flight.fname.toLowerCase().includes(sanitizeQuery.toLowerCase()) ||
                    flight.lname.toLowerCase().includes(sanitizeQuery.toLowerCase())
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
                        {flight.fname}  {flight.lname}
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default SearchFlights;
