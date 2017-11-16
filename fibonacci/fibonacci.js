var fibonacci = function(x) {
    if(x < 0) {
        return "OOPS"
    } else if(x <= 2) {
        return 1
    } else {
        return fibonacci(x-1) + fibonacci(x-2)
    }
}


module.exports = fibonacci
