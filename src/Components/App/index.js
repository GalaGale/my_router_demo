import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './style.css';

import Menu from '../Menu'

import Main from '../Main'
import Contacts from '../Contacts'
import About from '../About'


class App extends Component {
  render() {
    return (
      <div className="App">

          <Menu />

          <h1>This is application</h1>

          <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/contacts' component={Contacts}/>
              <Route path='/about' component={About}/>
          </Switch>

      </div>
    );
  }
}

export default App;
