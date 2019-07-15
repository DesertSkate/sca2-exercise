// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = el => {
  return el * 3
};

Array.prototype.map = function(fun) {
  let new_arr = []
  for (i = 0; i < this.length; i++) {
    new_arr.push(fun(this[i]))
  }
  return new_arr
};

console.log(arr.map(triple));
