import React, { Component } from 'react';
import { getPokemon } from './api.js';
import PokemonItem from './PokeItem.js';

export default class Detail extends Component {
    state = { pokemon: {} }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.pokemon);
        //use search params to access pokemon API and return selected pokemon
        if (data.body.results) {
        this.setState({ pokemon: data.body.results[0] })
        }// set state with first { pokemon } from searched array
    }
    render() {
        const { pokemon } = this.state;
        return (
            <PokemonItem pokemon={ pokemon } /> 

        )
    }
}
