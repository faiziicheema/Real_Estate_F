export const BASE_URL = "https://real-estate-ldcz.onrender.com";
export function convertTOBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (e) => {
      reject(e);
    };
  });
}
