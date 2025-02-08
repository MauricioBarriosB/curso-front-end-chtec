import CryptoJS from "crypto-js";

const CRYPTO_JS_KEY = import.meta.env.VITE_APP_CRYPTO_JS_KEY;

export const encryptData = (data: object) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), CRYPTO_JS_KEY).toString();
};

export const decryptData = (data: string) => {
    try {
        const bytes = CryptoJS.AES.decrypt(data, CRYPTO_JS_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        console.error("Error decrypting data", error);
        return null;
    }
};