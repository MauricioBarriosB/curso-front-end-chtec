import axios from "axios";
import { AxiosError } from 'axios';
import qs from "qs";

const API_HASH_KEY = import.meta.env.VITE_APP_API_KEY_HASHED;
const API_BASE_URL = import.meta.env.VITE_APP_API_URL;
const api = axios.create({ baseURL: API_BASE_URL, timeout: 1000 });

// ** ################ USERS API REQUEST ################ ** //

// ** Create new user account function, requires user data (stringify format) & x-api-key :

export const userSignIn = async (userInputData: object) => {
    try {
        const response = await api.post('users/signin',
            qs.stringify(userInputData), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-api-key': API_HASH_KEY
                }
            }
        )
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response?.data;
    }
};

// ** Login user function, requires user data (stringify format) & x-api-key :

export const userLogIn = async (userInputData: object) => {
    try {
        const response = await api.post('users/login',
            qs.stringify(userInputData), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-api-key': API_HASH_KEY
                }
            }
        )
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response?.data;
    }
};

// ** ################ DOCTORS API REQUEST ################ ** //

// ** Function to extract restricted data from doctors, requires JWT :

export const getAllDoctors = async (jwt: string) => {
    try {
        const response = await api.get('doctors',
            { headers: { 'Authorization': `Bearer ${jwt}` } },
        )
        return response.data;
    } catch (error: any) {
        return(error.response.data.messages.error);
    }
};

// ** Function to extract restricted data from doctors by specialty ID, requires ID and JWT :

export const getDoctorsByIdSpeciality = async (id: string | number, jwt: string) => {
    try {
        const response = await api.get(`doctors/${id}`,
            { headers: { 'Authorization': `Bearer ${jwt}` } },
        )
        return response.data;
    } catch (error: any) {
        return(error.response.data.messages.error);
    }
};

// ** Function to fetch data from hospital/doctors specialties :

export const getAllSpecialties = async () => {
    try {
        const response = await api.get('specialties',
            { headers: { 'x-api-key': API_HASH_KEY } }
        )
        return response.data;
    } catch (error: any) {
        return(error.response.data.messages.error);
    }
};

// ** ################ PATIENTS API REQUEST ################ ** //

// ** Function to fetch restricted patient data, requires JWT (validations from the backend) :

export const getAllPatients = async (jwt:string | unknown) => {
    try {
        const response = await api.get('patients',
            { headers: { 'Authorization': `Bearer ${jwt}` } },
        )
        return response.data;
    } catch (error: any) {
        return(error.response.data.messages.error);
    }
};

// ** ################ APPOINTMENTS API REQUEST ################ ** //

// ** Function to fetch appointments, requires JWT (validations from the backend) :

export const getAllAppointments = async (jwt:string | unknown) => {
    try {
        const response = await api.get('appointments',
            { headers: { 'Authorization': `Bearer ${jwt}` } },
        )
        return response.data;
    } catch (error: any) {
        return(error.response.data.messages.error);
    }
};

// ** Function to create appointment, requires user input & JWT (validations from the backend) :

export const createAppointment = async (userInputData: object, jwt:string) => {
    try {
        const response = await api.post('appointments',
            qs.stringify(userInputData), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${jwt}` 
                }
            }
        )
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response?.data;
    }
};

// ** Function to delete appointment, requires ID & JWT (validations from the backend) :

export const deleteAppointment = async (id:number, jwt:string) => {
    try {
        const response = await api.delete(`appointments/${id}`,
            { headers: { 'Authorization': `Bearer ${jwt}` } },
        )
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response?.data;
    }
};

// ** Function to update appointment, requires ID, user input & JWT (validations from the backend) :

export const updateAppointment = async (id:number, userInputData: object, jwt:string) => {
    try {
        const response = await api.put(`appointments/${id}`,
            qs.stringify(userInputData), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${jwt}` 
                }
            }
        )
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response?.data;
    }
};

// ** Function to set attended appointment , requires ID, user input & JWT (validations from the backend) :

export const attendedAppointment = async (id:number, userInputData: object, jwt:string) => {
    try {
        const response = await api.patch(`appointments/${id}`,
            qs.stringify(userInputData), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${jwt}` 
                }
            }
        )
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response?.data;
    }
};