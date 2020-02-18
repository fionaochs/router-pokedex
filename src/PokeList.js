import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {
    render () {

     return (
        <section className="options">
            <section className="list-section">
                <ul className="pokemons">
                    {this.props.pokemon.map(passedPokemon => <PokeItem pokemon={passedPokemon} />)}
                </ul>
            </section>
        </section>
     );  
    }
}
