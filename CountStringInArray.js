/**
 * Count String in Array
 * 
 * or count a string how many times repeat in a array
 */
const arr_str = [
    "hello",
    "world",
    "js.developer",
    "js.developer",
    "js.developer",
    "hello",
    "match"
];
//method for word count
const count_word = (arr) => {

    const count = {};

    arr.forEach(element => {

        if (count[element]) {

            count[element]++;

        } else {

            count[element] == 1;
        }
    });
    return count;
};

//calling method and passing argument
let result = count_word(arr_str);

console.log(result);