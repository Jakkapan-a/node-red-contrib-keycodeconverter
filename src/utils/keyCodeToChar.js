// Define a type for the key code to character mapping
// type KeyCodeToCharMap = {
//     [keyCode: number]: string;
//   };
  
  // Define the mapping for non-shifted keys
   const keyCodeToChar = {
    // text
    30: "a", 48: "b", 46: "c", 32: "d", 18: "e", 33: "f", 34: "g", 35: "h", 23: "i", 36: "j", 
    37: "k", 38: "l", 50: "m", 49: "n", 24: "o", 25: "p", 16: "q", 19: "r", 31: "s", 20: "t", 
    22: "u", 47: "v", 17: "w", 45: "x", 21: "y", 44: "z",
    // numbers
    2: "1", 3: "2", 4: "3", 5: "4", 6: "5", 7: "6", 8: "7", 9: "8", 10: "9", 11: "0", 12: "-", 13: "=",
    // numbers pad
    82: "0", 79: "1", 80: "2", 81: "3", 75: "4", 76: "5", 77: "6", 71: "7", 72: "8", 73: "9", 
    83: ".", 74: "-", 78: "+", 55: "*", 98: "/",
    // special characters
    26: "[", 27: "]", 43: `\'`, 39: ";", 40: "'", 51: ",", 52: ".", 53: "/",
  };
  
  // Define the mapping for shifted keys
   const keyCodeToCharShift = {
    // text
    30: "A", 48: "B", 46: "C", 32: "D", 18: "E", 33: "F", 34: "G", 35: "H", 23: "I", 36: "J", 
    37: "K", 38: "L", 50: "M", 49: "N", 24: "O", 25: "P", 16: "Q", 19: "R", 31: "S", 20: "T", 
    22: "U", 47: "V", 17: "W", 45: "X", 21: "Y", 44: "Z",
    // numbers
    2: "!", 3: "@", 4: "#", 5: "$", 6: "%", 7: "^", 8: "&", 9: "*", 10: "(", 11: ")", 12: "_", 13: "+",
    // numbers pad
    82: "0", 79: "1", 80: "2", 81: "3", 75: "4", 76: "5", 77: "6", 71: "7", 72: "8", 73: "9", 
    83: ".", 74: "-", 78: "+", 55: "*", 98: "/",
    // special characters
    26: "{", 27: "}", 43: '"', 39: ":", 40: '"', 51: "<", 52: ">", 53: "?",
  };

  // Export the mapping
  module.exports = { keyCodeToChar, keyCodeToCharShift };