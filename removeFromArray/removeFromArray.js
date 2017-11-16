var removeFromArray = function() {
    let arr = arguments[0]
    let key = 
    // loop through array
    for(let i = 0; i < arr.length; i++){
        let trash = [];
        let returnArr = [];
    // if element == key, push element into 1 array
        if (arr[i] == key) {
            trash.push(arr[i])
        } else {
         // else push element into return array
            returnArr.push(arr[i])
        }
        return returnArr
    }
}

module.exports = removeFromArray
