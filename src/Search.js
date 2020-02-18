import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <input 
                value={this.props.searchQuery || ''}
                onChange={this.props.handleChange}/>
                <button>Search</button>
                <div id="search-type">
                        <label id="name-check" >Pokemon Name: 
                            <input id="name-check" type="radio" name="type" value="pokemon" onClick={this.props.handleType}></input>
                        </label>

                        <label id="name-check">Type: 
                            <input id="name-check" type="radio" name="type" value="type_1" onClick={this.props.handleType}></input>
                        </label>

                        <label id="name-check">Ability: 
                            <input id="name-check" type="radio" name="type" value="ability" onClick={this.props.handleType}></input>
                        </label>
                </div>
            </form>
        )
    }
}
//value of input is searchQuery
//on form change, handleChange which sets state of searchQuery to e.target.value
//onSubmit, handleSearch gets pokemon data from API and sets state to data results
    // pass in searchQuery to getPokemon

//each radio button value corresponds to, state searchTerm: [{ search: "type_1" } { search: "ability" }{ search: "pokemon" }]
    //handle type then sets the value
// for radio buttons value = what you are filtering search by
// pass in handleType to set value of type of search button
       
