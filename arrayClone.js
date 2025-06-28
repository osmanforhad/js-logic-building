/**
 * make the clone of an array in javascript
 * [1,2,3]
 * expected output = [1,2,3,[1,2,3]]
 */
let arr = [1, 2, 3];
//method one
let result = [...arr, arr];
console.log(result);

//method 2
let cloneArr = (ar) => {
    let newArr = [...ar];
    newArr.push(ar);
    return newArr;
}
console.log(cloneArr(arr));