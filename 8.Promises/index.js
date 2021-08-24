/*
A promise is an object representating the eventual completion or failure of an asynchronous operation.

A promise is a returned object to which you attach callbacks, insteadd of passing callbacks into a function;
*/

// const willGetYouADog = new Promise(function (resolve, reject) {
//     const rand = Math.random();
//     if (rand < 0.5) resolve();
//     else reject();
// });
// willGetYouADog.then(function () {
//     console.log("Got a Dog!");
// });
// willGetYouADog.catch(function () {
//     console.log("No Dog!");
// });


const willGetYouADog = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const rand = Math.random();
        if (rand < 0.5) resolve();
        else reject();
    }, 3000);
})
    .then(function () {
        console.log("Got a Dog!");
    })
    .catch(function () {
        console.log("No Dog!");
    });

console.log("Hello , I am waiting for your Promise");
