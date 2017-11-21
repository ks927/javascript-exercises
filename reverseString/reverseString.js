var reverseString = function(words) {
  // vars
  let letters = words.split('');
  let reversed = [];
    
  // loop
  for (i = 0; i < letters.length; i++) {
      // unshift letter into reversed
      reversed.unshift(letters[i]);
      
  }
    return reversed.join('');
    
}

module.exports = reverseString