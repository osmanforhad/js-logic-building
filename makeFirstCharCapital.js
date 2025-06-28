/**
 * How to make first character capital of
 * ecah word in a string
 */
let institute = "the people's university of bangladesh";
//convert string into an array
let arr = institute.split(" ");
//console.log(arr);

let final_result = [];

//applying for of loop
for (const i of arr) {
    //get first char of every word and make it UpperCase
    let getFirst_char = i[0].toUpperCase();
    //console.log(getFirst_char);

    //get words and decrace first char
    let get_words = i.slice(1);
    //console.log(get_words);

    //push array into a variable where first every 1st char of words are capital
    final_result.push(getFirst_char + get_words);
}
//console and convert array into a string
console.log(final_result.join(" "));