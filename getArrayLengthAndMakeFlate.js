/**
 * get the length of an 2d or 3d array by value
 * and
 * make the array flate
 */
let array_1 = [5, 7, [4, 2, [4]]];
//making flate array
let array_2 = array_1.flat(Infinity);
console.log("There is a flate array: ", array_2);
//get array length
console.log("The Length of this array is: ", array_2.length); 