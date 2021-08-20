
exports.min = function min (array) {
  let minimum = array[0];
  for(let i = 1; i < array.length; i++ ) {
      if(array[i] < minimum) {
          minimum = array[i];
      }
      i++
  }
  return minimum;
}

exports.max = function max (array) {
    let maximum = array[0];
    for(let i = 1; i < array.length; i++ ) {
        if(array[i] > maximum) {
            maximum = array[i];
        }
        i++
    }
    return maximum;
}

exports.avg = function avg (array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}
