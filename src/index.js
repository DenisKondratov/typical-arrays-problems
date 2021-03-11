
exports.min = function min(array) {
  return arguments.length != 0 && array.length != 0 ? Math.min(...array) : 0
}

exports.max = function max(array) {
  return arguments.length != 0 && array.length != 0 ? Math.max(...array) : 0
}

exports.avg = function avg(array) {
  let average = 0;
  let sum = 0;
  if (arguments.length != 0 && array.length != 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      average = sum / array.length
    }
    return average
  }
  else return 0

}
