import CryptoJS from "crypto-js";
//import * as CryptoJS from "crypto-js";

export const encryptData = (data: any) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), import.meta.env.VITE_APP_CRYPTO_JS_KEY).toString();
};

export const decryptData = (data: any) => {
    try {
        const bytes = CryptoJS.AES.decrypt(data, import.meta.env.VITE_APP_CRYPTO_JS_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        console.error("Error decrypting data", error);
        return null;
    }
};