import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokemonItem from './PokeItem.js';
import Search from './Search.js';
import { getPokemon } from './api.js';
import Paging from './Paging.js';

export default class App extends Component{
  state = { 
    searchQuery: this.props.match.params.name,
    pokemon: [],
    count: 0
 }
 async componentDidMount() {
  if (this.props.match.params.name) {
      const data = await getPokemon(this.state.searchQuery);

      this.setState({ pokemon: data.body.results })
  } else {
      this.setState({ pokemon: []});
  }
}
handleSearch = async (e) => {
  e.preventDefault();
  //prevent form refresh
  //form allows for enter button to search
  

  let data = await getPokemon(this.state.searchQuery);
   //get data from API and set to state

  this.setState({ 
      pokemon: data.body.results,
      count: data.body.results.length
 })
  

this.props.history.push(this.state.searchQuery)

}

handleChange = (e) => this.setState({ searchQuery: e.target.value })


  render () {
  return (
    <div className="App">
    <header className="App-header">
      <Search 
          searchQuery={this.state.searchQuery}
          handleSearch={this.handleSearch} 
          handleChange={this.handleChange}
      />
    </header>
    <ul className="pokemons">
        {
            this.state.pokemon.map(pokemon => 
            <Link to={`pokemon/${pokemon.pokemon}`}> 
                    <PokemonItem pokemon={pokemon} />
            </Link>)
        }
    </ul>
    <Paging totalPages={12} pageNumber={1} />  
    </div>
  );
}
}

 