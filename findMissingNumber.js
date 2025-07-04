/**
 * Find missing number from
 * an array
 */
const arr = [1, 2, 3, 5];

const getMissingNumber = (arr) => {

    let missig_number = [];
    //get min and max value from given array
    let min_number = Math.min(...arr);
    let max_number = Math.max(...arr);

    for (let i = min_number; i < max_number; i++) {

        if (arr.indexOf(i) < 0) {
            missig_number.push(i);
        }

    }

    return missig_number;

}
const result = getMissingNumber(arr);
console.log(result);