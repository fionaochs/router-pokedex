import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <input 
                value={this.props.searchQuery}
                onChange={this.props.handleChange}/>
                <button>Search</button>
                <div id="search-type">
                        <label>Name: <input id="name-check" type="radio" name="searchtype" value="pokemon" onClick={this.props.handleType}></input></label>
                        <label>Type: <input type="radio" name="searchtype" value="type" onClick={this.props.handleType}></input></label>
                        <label>Ability: <input type="radio" name="searchtype" value="ability" onClick={this.props.handleType}></input></label>
                </div>
            </form>
        )
    }
}
//value of input is searchQuery
//on form change, handleChange which sets state of searchQuery to e.target.value
//onSubmit, handleSearch gets pokemon data from API and sets state to data results
    // pass in searchQuery to getPokemon
       
