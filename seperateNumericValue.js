/**
 * Seperate Numeric value from
 * a array
 */
let arr = [1, 2, 3, "sorif", "fokhrul", 7, 8, "osman", 4, 5];
let result = arr.filter((val) => {
  return typeof val === "number";
});
console.log(result);
//sorting the numeric value
let sorting = result.sort((a, b) => a - b);
console.log(sorting);

/**
 * Seperate String value from
 * a array
 */
let stringValue = arr.filter((val) => {
  return typeof val === "string";
});
console.log(stringValue);
