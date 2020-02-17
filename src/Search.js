import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <input 
                value={this.props.searchQuery}
                onChange={this.props.handleChange}/>
                <button>Search</button>
            </form>
        )
    }
}
//value of input is searchQuery
//on form change, handleChange which sets state of searchQuery to e.target.value
//onSubmit, handleSearch gets pokemon data from API and sets state to data results
    // pass in searchQuery to getPokemon
       
