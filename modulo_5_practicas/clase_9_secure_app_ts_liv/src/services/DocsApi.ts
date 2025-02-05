import axios from "axios";
import qs from "qs";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 1000,
});

// ** Función crear nueva cuenta de usaurio, requiere datos de usuario (stringify format) y x-api-key :
export const userSignIn = async (userInputData:object) => {
    try {
        const response = await api.post(
            'users/signin',
            qs.stringify(userInputData),
            {headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-api-key' : import.meta.env.VITE_APP_API_KEY_HASHED 
                }
            }
        )
        // console.log('*', response.data);
        return response.data;
    } catch (error:any) {
        alert(error.response.data.messages.error);
    }
};

// ** Función login de usuario, requiere datos de usuario (stringify format) y x-api-key :
export const userLogIn = async (userInputData:object) => {
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
        // console.log('*', response.data);
        return response.data;
    } catch (error:any) {
        alert(error.response.data.messages.error);
    }
};

// ** Función para extraer data restringida de doctores, requiere JWT :
export const getAllDoctors = async (jwt:string) => {
    try {
        const response = await api.get(
            'doctors',
            {headers: { 'Authorization' : `Bearer ${jwt}` }},
        )
        // console.log('*', response.data);
        return response.data;
    } catch (error:any) {
        alert(error.response.data.messages.error);
    }
};

// ** Función para extraer la data restringida de doctores por ID especialodad, requiere ID y JWT :
export const getDoctorsByIdSpeciality = async (id:string, jwt:string) => {
    try {
        const response = await api.get(
            `doctors/${id}`, 
            {headers: { 'Authorization' : `Bearer ${jwt}` }},
        )
        // console.log('*', response.data);
        return response.data;
    } catch (error:any) {
        alert(error.response.data.messages.error);
    }
};

// ** Función para traer data de especialidades :
export const getAllSpecialties = async () => {
    try {
        const response = await api.get(
            'specialties',
            {headers: {'x-api-key' : import.meta.env.VITE_APP_API_KEY_HASHED }}
        )
        // console.log('*', response.data);
        return response.data;
    } catch (error:any) {
        alert(error.response.data.messages.error);
    }
};

// ** Función para traer data restringida de pacientes, requiere JWT (validaciones desde el backend) :
export const getAllPatients = async (jwt:string) => {
    try {
        const response = await api.get(
            'patients',
            {headers: { 'Authorization' : `Bearer ${jwt}` }},
        )
        // console.log('*', response.data);
        return response.data;
    } catch (error:any) {
        alert( error.response.data.messages.error);
    }
};