/**
 * Reverse a String
 * without reverse method
 */
const str = "Allah is Almighty";
const getReverseStr = (str) => {

    str = str.split(" ");
    let result = [];
    for (let i = str.length; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join(" ");

}
const ouptput = getReverseStr(str);
console.log(ouptput);