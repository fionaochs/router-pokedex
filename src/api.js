import request from 'superagent';

export async function getPokemon(searchTerm, page, search){

const URL = `https://alchemy-pokedex.herokuapp.com/api/pokedex?${searchTerm}=${search}`
const pageString = (page) ? `&page=${page}&perPage=10` : '';

const pageURL = URL + pageString;
console.log(pageURL);

const data = await request.get(pageURL);
return data;
}

export async function pokeDetail(pokemon){
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemon}`);
}
