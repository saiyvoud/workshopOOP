import CryptoJS from "crypto-js";
export const Encrypts = async (encrypt: any)=>{
    const hash = CryptoJS.AES.encrypt(encrypt,"WorkShopOOP").toString()
    return hash
}
export const Decrypts = async (hash: any) => {
  return CryptoJS.AES.decrypt(hash, "WorkShopOOP").toString(CryptoJS.enc.Utf8);
};
