/**
 * Find Common Element 
 * From Two Or Multiple Array
 */
const num1 = [1, 2, 3, 4, 5];
const num2 = [3, 4, 5, 6, 7];

const intersection = num1.filter((value) => {
    return num2.includes(value);
});
console.log(intersection);