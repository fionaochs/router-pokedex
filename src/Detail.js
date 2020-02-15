import React, { Component } from 'react';
import { getPokemon } from './api.js';
import Pokemon from './PokeItem.js';

export default class Detail extends Component {
    state = {
        pokemon: {}
    }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.pokemon);
        
        if (data.body.results) {
        this.setState({ pokemon: data.body.results })
        }
    }
    render() {
        const { pokemon } = this.state;
        return (
        <Pokemon pokemon={ pokemon } /> 

        )
    }
}
