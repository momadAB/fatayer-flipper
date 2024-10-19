import nFormatter from "./nFormatter";

// Function to get the numeric part of the formatted number
export default function getFormattedNumberPart(num, digits = 3) {
  console.log(num);
  const formatted = nFormatter(num, digits);
  return parseFloat(formatted).toFixed(3); // Extract numeric part
}
