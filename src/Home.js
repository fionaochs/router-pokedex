import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokemonItem from './PokeItem.js';
import Search from './Search.js';
import { getPokemon } from './api.js';
import Paging from './Paging.js';

export default class App extends Component{
  state = { 
    searchQuery: this.props.match.params.name,
    // type: 'pokemon',
    pokemon: [],
    page: 1,
    totalPokemonResults: null,
    perPage: 10,
    searchTerm: [{ search: "type_1" }, { search: "ability" }, { search: "pokemon" }],
 }
 async componentDidMount() {
    //if name in URL, then access pokemon with that search input
    // .name comes from <Route exact path="/:name?" component={Home} />  
    // happens once on initialization of component

    if (this.props.match.params.name) {
        const data = await getPokemon(this.state.searchQuery);
        
        //set data results in state
        this.setState({ 
            pokemon: data.body.results,
            totalPokemonResults: data.body.count
        })
    } else {
        const data = await getPokemon();
        this.setState({ pokemon: data.body.results});
        //if no name in URL params empty and set to empty []
    }
}
async updatePage(increment) {
    const currentPage = this.state.page;
    const newPage = currentPage + increment;
    const newData = await getPokemon(this.state.searchTerm, newPage, this.state.searchQuery);
    this.setState({
        searchQuery: this.props.match.params.name,
        pokemon: newData.body.results,
        page: newPage,
        totalPokemonResults: newData.body.count
    })
    
}
handleSearch = async (e) => {
    e.preventDefault();
    //prevent form refresh
    //form allows for enter button to search
    
    let data = await getPokemon(this.state.searchTerm, this.state.page, this.state.searchQuery);
    //seach pokemon API with search input
    
    //get data from API and set to state
    this.setState({ 
        pokemon: data.body.results,
        page: 1,
        totalPokemonResults: data.body.count
    })
    
    this.props.history.push(this.state.searchQuery)
    
}

handleNext = e => {
    e.preventDefault();
    this.updatePage(1);
}

handlePrev = e => {
    e.preventDefault();
    this.updatePage(-1);
}
handleType = e => {
    this.setState({ searchTerm: e.target.value });
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
          handleType={this.handleType}
      />
    </header>
    <ul className="pokemons">
        {
            this.state.pokemon.map(pokemon => 
            <Link key={pokemon.pokemon} to={`pokemon/${pokemon.pokemon}`}> 
                    <PokemonItem pokemon={pokemon} />
            </Link>)
        }
        {/* go through all pokemon in [] and make link to specific pokemon URL detail page */}
    </ul>
    <Paging 
    totalPokemonResults={this.state.totalPokemonResults} 
    page={this.state.page} 
    handleNext={this.handleNext}
    handlePrev={this.handlePrev}
    perPage={10}/>  
    </div>
  );
}
}

 