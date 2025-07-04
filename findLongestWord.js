/**
 * Find longest word
 * fron an sentence
 */
const str = "The quick brown fox jumps over the lazy dog";

const finLongestWord = (sentence) => {

    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        word.length > longestWord.length ? longestWord = word : longestWord;
    }

    return longestWord;
}
const result = finLongestWord(str);
console.log(result);