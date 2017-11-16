var sumAll = function(x, y) {
  sum = 0;
  if (typeof(x) !== "number" || typeof(y) !== "number"){
      return 'ERROR'
  } else if (x < 0 || y < 0) {
    return 'ERROR'
  } else if (y > x) {
    for (i = x; i <= y; i++) {
      sum += i
    }
  } else {
    for (i = y; i <= x; i++)
      sum += i
  }
  return sum
}

module.exports = sumAll
