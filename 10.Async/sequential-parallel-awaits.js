// 2nd axios will execute only when the first axios will be finished.
// sequential requests
async function getPokemon() {
    const pok1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const pok2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const pok3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    console.log(pok1.data);
    console.log(pok2.data);
    console.log(pok3.data);
}
getPokemon();

// parallel requests;
// request sent roughly at same time and then waited to print
async function getPokemon2() {
    const pok1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const pok2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const pok3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    // const p1 = await pok1;
    // const p2 = await pok2;
    // const p3 = await pok3;
    const result = await Promise.all([pok1, pok2, pok3]);
    // console.log(p1.data);
    // console.log(p2.data);
    // console.log(p3.data);
    console.log(result);
}
getPokemon2();
