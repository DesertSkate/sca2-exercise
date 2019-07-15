// complete the implementation of sum and reduce such that reducing an array
// returns the product of its values
// [0,4,3,6,9].fold(sum, 0) === 22

const arr = [0, 1, 2, 3, 4, 9];

const sum = (acc, cur) => {
    return acc + cur
};

Array.prototype.reduce = function(fun, init) {
    let reduced = init
    let skipped = false // prevents skipping if it is the same as init

    for (i = 0; i < this.length; i++) {
        if (this[i] == init && !skipped) {
            skipped = true
            continue
        } else {
            reduced = fun(reduced, this[i])
        }
    }
    return reduced
};

const total = arr.reduce(sum, 1);
console.log(total);
