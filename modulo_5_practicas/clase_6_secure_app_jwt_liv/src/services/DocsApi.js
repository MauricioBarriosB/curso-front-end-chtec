import axios from "axios";
import qs from "qs";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 1000,
});

// ** Función crear nueva cuenta de usaurio, requiere datos de usuario y x-api-key :
// ** Recurso: users -> endpoint: signin 

export const userSignIn = async (userInputData) => {
    try {
        const response = await api.post(
            'users/signin',
            userInputData,
            {headers: { 'x-api-key' : import.meta.env.VITE_APP_API_KEY_HASHED }},
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
            qs.stringify(userInputData),
            {headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-api-key' : import.meta.env.VITE_APP_API_KEY_HASHED 
                }
            }
        )
        console.log('*', response.data);
        return response.data;
    } catch (error) {
        alert( error.response.data.messages.error);
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
            '/patients',
          //  {headers: { 'Authorization' : `Bearer ${jwt}` }},
        );

        console.log(response);

        /*
        if (response.data.status != 200) {
            alert(response.data.message);
            return false;
        } else {
            return response.data;
        }
        */
    } catch (error) {
        throw new Error("Error:", error);
    }
};