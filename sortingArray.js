//How to sort an Array
/**
 * method one
 *sort by alphavetically
 * a to z
 */
let arr_1 = ["sorif", "remon", "osman", "arif", "tajul"];
console.log(arr_1.sort());

/**
 * method two
 *sort by
 * numerically
 */
let arr_2 = [2, 9, 5, 6, 3, 1, 4, 7, 8, 100, 115, 110];
console.log(arr_2.sort((a, b) => a - b));
