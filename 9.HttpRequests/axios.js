// axios do JSON parsing by default.
// no need to do response.json to fetch data;
// no need of manual checking like !response.ok

// axios.get('https://swapi.dev/api/planets/')
//     .then(function (response) {
//         const { data } = response;
//         console.log(response.data);
//         data.results.forEach(element => {
//             console.log(element.name);
//         });
//         return axios.get(data.next);   // next is the field in response received;
//     })
//     .then(function (response) {
//         const { data } = response;
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// refactored

const fetchNextPlanets = function (url = 'https://swapi.dev/api/planets/') {
    return axios.get(url);
}
const printPlanets = function (response) {
    const { data } = response;
    console.log(data);
    data.results.forEach(element => {
        console.log(element.name);
    });
    // return fetchNextPlanets(data.next);   // next is the field in response received;
    return Promise.resolve(data.next);
}

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch(function (err) {
        console.log(err);
    });

