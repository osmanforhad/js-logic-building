/**
 * Get the minimum and maximun number in array
 * without min and max method
 */
let arr = [4, 2, 10, 0, 1];
//method for get max value
let newArr = arr.reduce((prev, curval) => {
    if (prev > curval) {
        return prev;
    } else {
        return curval;
    }
});
console.log(newArr);

//method for get min value
let newArrs = arr.reduce((prev, curval) => {
    if (prev < curval) {
        return prev;
    } else {
        return curval;
    }
});
console.log(newArrs);