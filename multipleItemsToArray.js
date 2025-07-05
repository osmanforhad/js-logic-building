/**
 * Convert Multiple intems into a
 * Single Array
 */
const users = [
    {
        name: 'Rahul', books: [
            "Against empathy", 'War'
        ]
    },
    {
        name: 'Max', books: [
            "Romeo and Juliet", 'Romantic'
        ]
    },
    {
        name: 'jane', books: [
            'Harry', 'Peace', 'Lord', 'Ring'
        ]
    },
];

let result = users.reduce((prev, curr) => {
    return [...prev, ...curr.books];
}, []);
console.log(result);