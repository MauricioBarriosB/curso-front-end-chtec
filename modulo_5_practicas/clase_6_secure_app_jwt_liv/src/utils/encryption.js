import CryptoJS from "crypto-js";

// ** https://www.npmjs.com/package/crypto-js
// ** https://dev.to/shubhamkhan/beginners-guide-to-aes-encryption-and-decryption-in-javascript-using-cryptojs-592

const SECRET_KEY = "safeapp_my_secret_key";

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

/*
export const encryptSHA1 = (data) => {
    const hash = CryptoJS.SHA1(data);
    return CryptoJS.enc.Hex.stringify(hash);
};
*/

export const decryptData = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Error decrypting data", error);
    return null;
  }
};
