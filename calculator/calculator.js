function add (x,y) {
	return x + y;
}

function subtract (x,y) {
	return x - y;
}

function sum (arr) {
	let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        // add each i onto sum
        sum += arr[i];
    }
    return sum;
}

function multiply (arr) {
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

function power(x,y) {
	return x ** y;
}

function factorial(x) {
  if(x==0) {
      return 0;
  }
  else if(x==1) {
    return 1
  }
  else if(x>1) {
    return x * factorial(x-1)
  }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}