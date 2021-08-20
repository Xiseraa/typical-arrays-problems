
exports.min = function min (array) {
    if(!array || array.length === 0){
        return 0;
      }
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
    if(!array || array.length === 0){
        return 0;
      }
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
    if(!array){
        return 0;
      }
    let sum = 0, counter = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
        counter++;
    }
    return count > 0 ? sum / counter : 0;
}
