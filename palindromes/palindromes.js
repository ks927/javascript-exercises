var palindromes = function(string) {
    let newStr = string.replace(/[^a-z0-9+]+/gi, "").toLowerCase();
    
    return newStr == newStr.split("").reverse().join("") ? true : false;
}

module.exports = palindromes
