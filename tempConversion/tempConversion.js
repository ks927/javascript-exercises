var ftoc = function(temp) {
  let converted = ((temp-32) / 1.8).toFixed(1)
  return Number(converted)
}

var ctof = function(temp) {
  let converted = Number((temp * 1.8) + 32).toFixed(1)
  return Number(converted)
}

module.exports = {
  ftoc,
  ctof
}
