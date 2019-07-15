const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // function which converts a multi-word string into an array of words
  let strArray = []
  for(let i = 0; i < str.length; i++) {
    strArray.push(str[i])
  }
  return strArray
};

const reverse = str => {
  // function which reverses the string
  let reverseArray = []
  for (i = 0; i < str.length; i++) {
    reverseArray.push(str[i])
  }
  reverseArray.reverse()
  return reverseArray.join("")
};

const uniqueOnes = arr => {
  // function which returns the inputted array without duplicate elements
  //return arr.filter((item, index) => arr.indexOf(item) >= index)
  let uniqueItems = []

  for (i = 0; i < arr.length; i++) {
    if (uniqueItems.includes(arr[i])) {
      continue
    } else {
      uniqueItems.push(arr[i])
    }
  }

  return uniqueItems
};

const factorial = num => {
  // function which returns the factorial of a positive integer
  let total = num
  for (i = 1; i < num; i++) {
    total *= i
  }
  return total
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  let ElementArrays = []
  if (arr1.length != arr2.length) {
    return -1
  }

  for (i = 0; i < arr1.length; i++) {

    if (i % 2 == 0 && i != 0|| ElementArrays.length == 0) {
      ElementArrays.push([arr1[i]])
      //console.log(i)
    } else {
      ElementArrays[ElementArrays.length - 1].push(arr1[i])
    }
    
  }

  for (i = 0; i < arr2.length; i++) {
    if (ElementArrays[ElementArrays.length - 1].length != 2) {
      ElementArrays[ElementArrays.length - 1].push(arr2[i])
      continue
    }

    if (ElementArrays[ElementArrays.length - 1].length == 2 || i % 2 == 0 && i != 0 || ElementArrays.length == 0) {
      ElementArrays.push([arr2[i]])
      //console.log(i)
    }
    
  }

  return ElementArrays
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let rawArr = []

  let arrLengths = arr.length

  for (i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
      rawArr.push(arr[i][j])
    }
  }

  let arr2 = rawArr.splice(arrLengths)
  let arr1 = rawArr

  return [arr1, arr2]
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let stringArray = str.split("")

  for (i = 0; i < num; i++) {
    stringArray.push(stringArray.shift())
  }

  let returnString = stringArray.join("")
  return returnString
};

const announceDate = () => {
  // Function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let date = new Date()
  
  return "Today's date is " + date.toDateString() + ". It is " + date.toLocaleTimeString()
};

// Write tests here:
console.log(tokenize("dog"))
console.log(reverse("dog"))
console.log(factorial(10))
console.log(uniqueOnes(["Dog", "Cat", "Dog", "Cat", "Dog", "Gorilla"]))
console.log(zip([1, 2, 3, 5, 2, 10], [3, 2, 1, 8, 9, 10]))
console.log(unzip([ [ 1, 2 ], [ 3, 5 ], [ 2, 3 ], [ 2, 1 ], [ 8, 9 ] ]))
console.log(shiftRight("Academies", 4))
console.log(announceDate())

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert(tokenize("dog"))
assert(reverse("factorial"))
assert(factorial(8))
assert(uniqueOnes(["Dog", "Cat", "Dog", "Cat", "Dog", "Gorilla"]))
assert(zip([1, 2, 3, 5, 2], [3, 2, 1, 8, 9]))
assert(unzip([ [ 1, 2 ], [ 3, 5 ], [ 2, 3 ], [ 2, 1 ], [ 8, 9 ] ]))
assert(shiftRight("Academies", 4))
assert(announceDate())
// asssert (reverse("3df") === "fd3")
