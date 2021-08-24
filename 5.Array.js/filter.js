// cretaes a new Array that follows the criteria provided by callback function

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = nums.filter((n) => {
    return n % 2 === 0;
});
console.log(even); // 2,4,6,8

// example2
const books = [
    {
        title: "book1",
        price: 500
    },
    {
        title: "book2",
        price: 400
    }
]

const query = 'book';
const results = books.filter((book) => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});

console.log(results);