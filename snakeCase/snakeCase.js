var snakeCase = function(str) {
  newStr = str.replace(/[^a-z0-9+]+/gi, "_").toLowerCase();
  
  // if newStr ends with a "_"
  // replace with nothing
  result = newStr.replace(/_$/, '');
  
  
  return result;
  
}

module.exports = snakeCase
