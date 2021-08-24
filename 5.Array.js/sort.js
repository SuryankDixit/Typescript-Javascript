// default sort converts the array into string 
const price = [22, 34, 5, 6, 785, 2, 25, 687, 9];
price.sort();
console.log(price);

const sortA = price.sort((a, b) => {
    return a - b;   // if returns -ve , sort a before b
});
console.log(sortA);

const sortD = price.sort((a, b) => {
    return b - a;   // if returns -ve , sort a before b
});
console.log(sortD);