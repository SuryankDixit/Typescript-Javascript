/*
AJAX : asynchronous js and xml;
*/

// fetch('https://swapi.dev/api/planets/')
//     .then(function (response) {
//         if (!response.ok) {
//             throw new Error(`Status Code Error: ${response.status}`);
//         } else {
//             response.json()
//                 .then(function (data) {
//                     console.log(data);
//                     data.results.forEach(function (planet) {
//                         console.log(planet.name, planet.climate);
//                     })
//                 })
//                 .catch(function (err) {
//                     console.log(err);
//                 });
//                 console.log("Hello2");
//         }
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// console.log("Hello");


fetch('https://swapi.dev/api/planets/')
    .then(function (response) {
        // fetch does not reject promise if the status code is 404 or 500 types;
        // that is why we are checking manually here;
        if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
        else return response.json();
    })
    .then(function (data) {
        console.log(data);
        const filmURL = data.results[0].films[0];
        return fetch(filmURL);
    })
    .then(function (response) {
        if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
        else return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.title);
        // const filmURL = data.results[0].films[0];
        // return fetch(filmURL);
    })
    .catch(function (err) {
        console.log(err);
    });

console.log("Hello");