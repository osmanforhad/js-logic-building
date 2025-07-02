/**
 * Remore Duplicate Value
 * form an Array
 */
let names = [
    "sorif",
    "osman",
    "rimon",
    "forhad",
    "sorif",
    "fokhrul",
    "osman"
];

/**
 * Solution Method one
 */
let uniqueArr = [...new Set(names)];
console.log(uniqueArr);

/**
 * solutin method two
 * @param {*} array 
 * @returns 
 */

//define method for geting new value as output
const newValue = (array) => {

    let newArr = [];

    for (let index = 0; index < array.length; index++) {

        const element = array[index];

        if (newArr.indexOf(element) === -1) {

            newArr.push(array[index]);
        }

    }
    return newArr;
}

//calling method and passing argument
let result = newValue(names);

console.log(result);