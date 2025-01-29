import axios from "axios";

const API_URL = "http://localhost:3001";

// ** https://openwebinars.net/blog/que-es-json-web-token-y-como-funciona/
// ** https://www.freecodecamp.org/news/json-server-for-frontend-development/
// ** https://academy.leewayweb.com/como-autenticar-jwt-php-segura/
// ** Ejecutar el json server: npm run server

export const getFlights = async () => {
    const response = await axios.get(`${API_URL}/flights`);
    return response.data;
}

export const getSecureData = async (token) => {
    console.log('* API getSecureData -> token :', token);

    try {
        const response = await axios.get(`${API_URL}/secure-data`, {

            // ** La cabecera authorization bearer es un tipo de header de una petición HTTP que carga con información relevante 
            // ** al tipo de usuario con el objetivo de darle autoridad para ejecutar la acción requerida en la petición. 

            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos protegidos", error);
        throw error;
    }
}