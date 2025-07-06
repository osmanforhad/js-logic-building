/**
 * Anagram (match) between
 *  two array
 */
const str1 = 'Mary';
const str2 = 'Army';

const anagram = (str1, str2) => {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();

    a = a.split("").sort().join();
    b = b.split("").sort().join();

    return a === b;
}

const result = anagram(str1, str2);
console.log(result);