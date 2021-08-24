/*
AJAX : asynchronous js and xml;
*/

fetch('https://swapi.dev/api/planets/')
    .then(function (response) {
        if (!response.ok) {
            throw new Error(`Status Code Error: ${response.status}`);
        } else {
            response.json()
                .then(function (data) {
                    console.log(data);
                    data.results.forEach(function (planet) {
                        console.log(planet.name, planet.climate);
                    })
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    })
    .catch(function (err) {
        console.log(err);
    });

console.log("Hello");