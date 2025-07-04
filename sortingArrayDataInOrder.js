/**
 * Sorting array data in a 
 * spacifice order or Group
 */
const users = [
    { name: "sorif", age: 33 },
    { name: "osman", age: 32 },
    { name: "fokhrul", age: 34 },
];

const groupBy = (arr) => {
    //define an empty object
    const check = {};

    arr.forEach((user) => {
        if (!check[user.age]) {
            check[user.age] = [user];
        } else {
            check[user.age].push(user);
        }
    });
    return check;
}

const result = groupBy(users);
console.log(result);