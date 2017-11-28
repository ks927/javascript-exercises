function echo(string) {
	return string;
}

function shout(string) {
	return string.toUpperCase();
}

function repeat(string, num) {
    if (num === undefined) {
        num = 2;
    }
    newString = ""
    for(var i = 1; i <= num; i++) {
        if (i < num){
        newString += (string + " ");
        } else {
        newString += string;
        }
    }
    return newString;
}

function pieceOfWord(string, num) {
    if(num === undefined) {
        num = 0;
    }
  
  newString = [];
  
	i = 0;
  while (i < num) {
  	newString.push(string[i]);
    i++
  }
  return newString.join("");
}

function firstWord(string) {
    newString = string.split(" ");
    return newString[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(title) {
  // split title into words
  titleSplit = title.split(" ")
  // create array to push words into
  let newTitle = [];
    
  // capitalize first word
  newTitle.push(capitalize(titleSplit[0]))
  
  const littleWords = ["and", "over", "the"]
  // if more than 1 word, loop should capitalize every word
  // that is not included in littleWords
  	for (i = 1; i < titleSplit.length; i++) {
      if(littleWords.includes(titleSplit[i])) {
      	newTitle.push(titleSplit[i])
      } else {
        newTitle.push(capitalize(titleSplit[i]))
      }
  	}
  // return new title
  return newTitle.join(" ");
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}