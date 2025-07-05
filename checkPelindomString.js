/**
 * Check given string
 * Pelindom or not
 */
let input_str = 'level';

const isPlain = (str) => {
    const revers_str = str.split("").reverse().join("");
    return revers_str === str;

}
const result = isPlain(input_str);
console.log(result);