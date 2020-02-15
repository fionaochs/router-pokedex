import React, { Component } from 'react';
import Detail from './Detail.js';
import About from './About.js';
import Header from './Header.js';
import Home from './Home.js';
import './App.css';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';

export default class App extends Component{
  render (){
  return (
    <Router>
      <div>
          <Link to="/about-me/">About Pokemon</Link>
          <Switch> 
            <Route exact path="/:name?" component={Home} />  
            <Route exact path="/about-me/:other" component={About} />
            <Route exact path="/pokemon/:pokemon" component={Detail} />
          </Switch>
      </div>
    </Router>
  );
}
}


