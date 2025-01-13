import axios from "axios";

// * Api key must be stored into enviroment vars (do it later) :

const apiKey = 'mab25';

const api = axios.create({
    baseURL: "https://capacitaenlinea.cl/demodoctorapi",
    timeout: 1000,
});

export const findAll = async () => {
    try {
        const response = await api.get(`index.php?key=${apiKey}`);
        return response.data;
    } catch (error) {
        throw new Error("Error:", error);
    }
};

export const findByIdSpeciality = async (id) => {
    try {
        const response = await api.get(`index.php?key=${apiKey}&id=${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Error:", error);
    }
};

export const create = async (newName, newSpecialty, newBio) => {
    try {
        const response = await api.post('index.php', { 
            apiKey, newName, newSpecialty, newBio
        });
        return response.data;
    } catch (error) {
        throw new Error("Error:", error);
    }
};
