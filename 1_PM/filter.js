// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  return el % 7 === 0 && typeof el == "number"
};

Array.prototype.filter = function(fun) {
  let new_arr = []
   for (i = 0; i < this.length; i ++) {
     if (fun(this[i]) == true) {
        new_arr.push(this[i])
     }
   }
   return new_arr
};

const newArr = arr.filter(multOf7);

console.log(newArr);