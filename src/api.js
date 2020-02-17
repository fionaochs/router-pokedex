import request from 'superagent';

export const getPokemon = (pokemon) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemon}`)
// add to URL for paging &page=${page}
