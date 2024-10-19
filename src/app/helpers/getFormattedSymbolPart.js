import nFormatter from "./nFormatter";

// Function to get the symbol part of the formatted number
export default function getFormattedSymbolPart(num, digits = 3) {
  const formatted = nFormatter(num, digits);
  return formatted.replace(parseFloat(formatted), ""); // Extract symbol part
}
