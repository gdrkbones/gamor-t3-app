// Convierte un número en string y agrega ceros por delante si el número de caracteres es menor que la longitud dada (si se indica).
const intToString = (value: number, length?: number) => {
  // Si no se ha especificado una longitud se devuelve el valor original como string.
  if (!length) return String(value);
  // Si la cantidad de caracteres del valor como string es menor a la longitud deseada, se le agregan ceros por delante.
  if (String(value).length < length)
    return "0".repeat(length - String(value).length) + String(value);
};

export default intToString;
