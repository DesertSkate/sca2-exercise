// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const dog = {
  no: false,
  cat: true
}

const hasFalsyValue = obj => {
  for (i = 0; i < Object.keys(obj).length; i++) {
    if (!obj[Object.keys(obj)[i]]) {
      return true
    } else {
      return false
    }
  }
};

console.log(hasFalsyValue(dog))