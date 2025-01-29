import axios from "axios";

const X_API_KEY_HASHED = '$2y$10$0PNxS3ciP3qpulSnblsUNOc8sXzbDWVcyIgMZ/z7vOnE9cH7t6XVi';

const api = axios.create({
    baseURL: 'http://localhost/demodoctorapi/api.php',
    timeout: 1000,
});

// ** Función crear nueva cuenta de usaurio, requiere datos de usuario y x-api-key :
// ** Recurso: users -> endpoint: signin 

export const userSignIn = async (userInputData) => {
    try {
        const response = await api.post(
            'users/signin',
            userInputData,
            {headers: { 'x-api-key' : X_API_KEY_HASHED }},
        );
        if (response.data.status != 200) {
            alert(response.data.message);
            return false;
        } else {
            return response.data;
        }
    } catch (error) {
        throw new Error("Error:", error);
    }
};

// ** Función login de usuario, requiere datos de usuario y x-api-key :
// ** Recurso: users -> endpoint: login 

export const userLogIn = async (userInputData) => {
    try {
        const response = await api.post(
            'users/login',
            userInputData,
            {headers: { 'x-api-key' : X_API_KEY_HASHED }},
        );
        if (response.data.status != 200) {
            alert(response.data.message);
            return false;
        } else {
            return response.data;
        }
    } catch (error) {
        throw new Error("Error:", error);
    }
};

// ** Función para extraer data restringida de doctores, requiere JWT :
// ** Recurso: doctors -> endpoint: all 

export const getAllDoctors = async (jwt) => {
    try {
        const response = await api.get(
            'doctors/all', 
            {headers: { 'Authorization' : `Bearer ${jwt}` }},
        );
        if (response.data.status != 200) {
            alert(response.data.message);
            return false;
        } else {
            return response.data;
        }
    } catch (error) {
        throw new Error("Error:", error);
    }
};

// ** Función para extraer la data restringida de doctores por ID especialodad, requiere ID y JWT :
// ** Recurso: doctors -> endpoint: n 

export const getDoctorsByIdSpeciality = async (id, jwt) => {
    try {
        const response = await api.get(
            `doctors/${id}`, 
            {headers: { 'Authorization' : `Bearer ${jwt}` }},
        );
        if (response.data.status != 200) {
            alert(response.data.message);
            return false;
        } else {
            return response.data;
        }
    } catch (error) {
        throw new Error("Error:", error);
    }
};

// ** Función para traer data restringida de pacientes, requiere JWT (validaciones desde el backend) :
// ** Recurso: patients -> endpoint: all 

export const getAllPatients = async (jwt) => {
    try {
        const response = await api.get(
            'patients/all',
            {headers: { 'Authorization' : `Bearer ${jwt}` }},
        );
        if (response.data.status != 200) {
            alert(response.data.message);
            return false;
        } else {
            return response.data;
        }
    } catch (error) {
        throw new Error("Error:", error);
    }
};