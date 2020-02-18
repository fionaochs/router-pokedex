import React, { Component } from 'react';

export default class Paging extends Component {
    render() {
    const { perPage } = this.props; 
    const { totalPokemonResults } = this.props;
    const { page } = this.props;
    const lastPage = Math.ceil(totalPokemonResults / perPage);
    console.log(totalPokemonResults);
    if (!totalPokemonResults) {
      return <p className="paging">No results, try another search</p>;
    }

      return <p className="paging">
      <button className="prev"
        onClick={this.props.handlePrev} disabled={page === 1 ? true : ""}
        type="button"> ◀ </button>
        {/* //if go back decriment pages */}

      <span> Page {page} of {lastPage} </span>
      <button className="next" disabled={page === lastPage ? true : ""}
        onClick={this.props.handleNext}
        type="button"> ▶ </button>
        {/* //if go forward incriment pages */}

    </p>
    }
}