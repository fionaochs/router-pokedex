import React, { Component } from 'react';


export default class PokemonItem extends Component {
    render () {
        const { pokemon } = this.props;
        return <li id="pokemon-item" key={pokemon.pokemon}>
            <div id="info-container">
                <h3>{pokemon.pokemon}</h3>
            </div>
            <div id="image-container">
                <img alt={pokemon.url_image}
                    src={pokemon.url_image}/>
            </div>
            <div id="abilities">
                <p>Type: {pokemon.type_1}</p>
                <p>Defense: {pokemon.type_2}</p>
            </div>
            <table>
            <thead>
                <tr>
                    <th>Def</th>
                    <th>Hp</th>
                    <th>Sp Atk</th>
                    <th>Sp Def</th>
                    <th>Speed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{pokemon.defense}</td>
                    <td>{pokemon.hp}</td>
                    <td>{pokemon.special_attack}</td>
                    <td>{pokemon.special_defense}</td>
                    <td>{pokemon.speed}</td>
                </tr>
            </tbody>
            </table>
        </li>
    }
}