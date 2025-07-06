/**
 * Get Union Number from
 * two or multiple Array
 */
const num1 = [1, 2];
const num2 = [1, 2, 3];

const concat_theArray = [...num1, ...num2];

const Union = [...new Set(concat_theArray)];
console.log(Union);