// Function to determine the color of text based on the symbol
export default function getColorForSymbol(symbol) {
  switch (symbol) {
    case "k":
      return "text-green-300";
    case "M":
      return "text-blue-300";
    case "B":
      return "text-purple-300";
    case "T":
      return "text-orange-300";
    case "P":
      return "text-yellow-300";
    case "E":
      return "text-red-400";
    default:
      return "text-white"; // Default color before reaching 1k KWD
  }
}
