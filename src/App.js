import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Factories from './components/FactoriesComponent';
import BoxTypes from './components/setup/orderSetup/BoxTypesComponent'

class App extends Component {

  render() {
    return (
      <div>
          <div>
            <Link to='/'>Home</Link> | 
            <Link to='/About'>About</Link> | 
            <Link to='/Contact'>Contact</Link> |
            <Link to='/BoxType'>Box Type</Link>
          </div>


        <Switch>
          <Route component={Factories} path='/' exact/>
          <Route component={Home} exact  path='/Home' />
          <Route component={Contact} path='/Contact' />
          <Route component={About} path='/About' />
          <Route component={BoxTypes} path='/BoxType' />
        </Switch>
      </div>
    );
  }
}

export default App;
