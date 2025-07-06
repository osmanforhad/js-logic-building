/**
 * Check substring into
 * a string
 */
const str = "Chek the Substring";
const substring = 'The';

const isSubStringExist = (str, subStr) => {
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        let element = str[i].toLowerCase();

        if (element === subStr.toLowerCase()) {
            return true;
        }

    }
    return false;

}
const result = isSubStringExist(str, substring);
console.log(result);