let movies = [
    "Mr. Fox",
    "Mr. and Mrs. Fox",
    "Mr. World",
    "Mrs. Deeds"
];

// find returns the first movie that matches the criteria;
const movie1 = movies.find((movie) => {
    return movie.includes('Mrs.');
});
console.log(movie1);

const movie2 = movies.find((movie) => {
    return movie.indexOf('Mrs.') === 0;
});
console.log(movie2);