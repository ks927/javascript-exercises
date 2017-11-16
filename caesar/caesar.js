var caesar = function(str, key) {
    let cipheredString = new String
    for(char=0;char<str.length;char++) {
      let ascii;
      // convert chars to numbers
      let convertChar = str[char].charCodeAt()
      
      // if char is alphabetic, add key
      if(convertChar >= 65 && convertChar <= 90 || convertChar >= 97 && convertChar <= 122){
        ascii = convertChar + key
      } else {
          ascii = convertChar
      }
      // lower case
      if(ascii > 122) {
         cipheredString += convertToLetter(ascii - 25 - 1)
      // upper case
      } else if(ascii > 90 && ascii < 97) {
         cipheredString += convertToLetter(ascii - 25 - 1)
      } else {
         cipheredString += convertToLetter(ascii)
    }
    //console.log(cipheredString)
 }
 return cipheredString
}

function convertToLetter(number) {
  return String.fromCharCode(number)
}

module.exports = caesar
