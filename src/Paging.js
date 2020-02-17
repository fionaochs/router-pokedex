import React, { Component } from 'react';

export default class Paging extends Component {
    constructor(){
        super();
        //access and call functions on an objects parent
        this.state = { page: 1 };
        //initialize to page 1
    }
    componentDidMount() {
        this.updateSearchControls();
        //grab sort=id&pokemon=geo&page=1 from URL
        //set to new searchParams
    
        // window.addEventListener("hashchange", () => {
        //   this.updateSearchControls();
        // });
      }
      updatePage(increment) {
        const { page } = this.state;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        searchParams.set("page", page + increment);
    
        window.location.hash = searchParams.toString();
      }
      updateSearchControls() {
        const { page } = this.state;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
         //grab sort=id&pokemon=geo&page=1 from URL
        //set to new searchParams
    
        let pageToUse = page;
        //initialized at 1
    
        const parsedPage = parseInt(searchParams.get("page"), 10);
        //grab  page from sort=id&pokemon=geo&page=1 from URL

        if (isNaN(parsedPage)) {
            //if not a number use page 1
          pageToUse = 1;
        } else {
          pageToUse = parsedPage;
        }
    
        this.setState({ page: pageToUse });
        //update page state with number from URL
      }
    
    render() {
    // const page = this.state.page;
    const perPage = 10; 
    const count = this.props.count;
    //parent property from App.js
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);
    //grab sort=id&pokemon=geo&page=1 from URL
    //set to new searchParams

    const parsedPage = parseInt(searchParams.get("page"));

    let pageToUse;
    if (isNaN(parsedPage)) {
      pageToUse = 1;
    } else {
      pageToUse = parsedPage;
    }

    if (!count) {
      return <p className="paging">No results, try another search</p>;
    }
    //if no page results, give error

    const lastPage = Math.ceil(count / perPage);
    //calculate number of last page

      return <p className="paging">
      <button className="prev"
        onClick={() => this.updatePage(-1)} disabled={pageToUse === 1 ? "true" : ""}
        type="button"> ◀ </button>
        {/* //if go back decriment pages */}

      <span> Page {pageToUse} of {lastPage} </span>
      <button className="next" disabled={pageToUse === lastPage ? "true" : ""}
        onClick={() => this.updatePage(1)}
        type="button"> ▶ </button>
        {/* //if go forward incriment pages */}

    </p>
    }
}