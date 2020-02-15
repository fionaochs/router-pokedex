import React, { Component } from 'react';
import Search from './Search.js';
import Detail from './Detail.js';
import PokeList from './PokeList.js';
import About from './About.js';
import Header from './Header.js';
import Paging from './Paging.js';
import request from 'superagent';
import Pokemon from './PokeItem.js';


import './App.css';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';

export default class App extends Component{
  state = { 
    searchQuery: this.props.match.params.pokemon,
    pokedex: [],
 }
 async componentDidMount() {
  if (this.props.match.params.name) {
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.props.match.params.pokemon}`)

      this.setState({ pokemon: data.body.results })
  }
}
handleSearch = async (e) => {
  e.preventDefault();

  const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchQuery}`)

  this.setState({ 
      pokedex: data.body.results, })
  

this.props.history.push(this.state.searchQuery)

}

handleChange = (e) => this.setState({ searchQuery: e.target.value })


  render () {
  const { pokedex, count } = this.state;

  return (
    <Router >
      <div>
          <Header>
          <Search
                searchQuery={this.state.searchQuery}
                handleSearch={this.handleSearch} 
                handleChange={this.handleChange}
            />
            </Header>
    
          <ul>
              {
                    this.state.pokedex.map(pokemon => 
                    <Link to={`pokemon/${pokemon.pokemon}`}> 
                        <Pokemon pokemon={pokemon} />
                    </Link>)
              }
          </ul>
          <Switch> 
            <Route exact path='/PokeList'>
              <PokeList pokedex={pokedex} />
            </Route>
            <Route exact path="/about-me/:other" component={About} />
            <Route exact path="/pokemon/:charId" component={Detail} />
          </Switch>
          <Paging count={count} />
      </div>
    </Router>
  );
}
}