/**
 * sorting array data
 * name wise
 */
let drinks = [
    { name: "lemon", price: 50 },
    { name: "Apple", price: 20 },
    { name: "WaterMillon", price: 250 },
];

const result = drinks.sort((a, b) => {
    return a.name.toLowerCase()
        <
        b.name.toLowerCase() ? -1 : 1
});
console.log(result);