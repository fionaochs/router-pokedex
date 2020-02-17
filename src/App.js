import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Home from './Home.js';
import Detail from './Detail.js';
import About from './About.js';
import Header from './Header.js';
import './App.css';


export default class App extends Component {
 

  render() {
      return (
        <Router>
        <div>
            <Header/>
            <Link to="/">Home</Link><br></br>
            <Link to="/about/other">About</Link>
            <Switch>
                <Route exact path="/:name?" component={Home} />  
                <Route exact path="/about/:other" component={About} />
                <Route exact path="/pokemon/:pokemon" component={Detail} />
            </Switch>
                
          </div>
        </Router>
      );
  }
}
            
            // look at URL, if only a / go to home page 
            // :name is variable
            //   if see character Id then anything after the / go to the character component page 


    



