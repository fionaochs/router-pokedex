import request from 'superagent';

export async function getPokemon(pokemon, page){

const URL = `https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemon}`
const pageString = (page) ? `&page=${page}` : '';
const pageURL = URL + pageString;

const data = await request.get(pageURL);
return data;
}

export async function pokeDetail(pokemon){
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemon}`);
}
