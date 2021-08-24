async function greet() {
    return "Hello";
}
const x = greet().then(function (message) {
    console.log(message);
})
console.log(x);



async function fun() {
    const data = await axios.get('https://swapi.dev/api/planets/');
    console.log(data);
}
fun().catch(function (err) {
    console.log(err);
});

console.log("hello2");


async function fun2() {
    try {
        const data = await axios.get('https://swapi.dev/api/planets/');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
fun2();