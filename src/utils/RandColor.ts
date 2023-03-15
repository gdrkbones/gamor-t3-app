// Function that generates a random color in hexadecimal notation
const randColor = () => {
  // Get a random number between 0 and 16777215 (the decimal equivalent to FFFFFF in hexadecimal)
  const randomNum = Math.floor(Math.random() * 16777215);
  // Convert the number to a hexadecimal string
  const hexString = randomNum.toString(16);
  // Make sure the string has 6 characters, adding leading zeros if necessary
  const paddedHexString = hexString.padStart(6, "0");
  // Return the final color string in hexadecimal format
  return "#" + paddedHexString.toUpperCase();
};

export default randColor;
