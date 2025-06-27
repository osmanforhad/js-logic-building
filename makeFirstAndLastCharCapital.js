/**
 * How to make first and last character
 * capital of a string
 */
let country = "bangladesh";
//get first index of the string and make capital
let cap_firstChar = country[0].toUpperCase();
//get last index of the string and make capital
let cap_lastChar = country[country.length - 1].toUpperCase();
//cocate the total string make it as requiremetn
let final_String = country.slice(1, 9);
console.log(cap_firstChar + final_String + cap_lastChar);