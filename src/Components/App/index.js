import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './style.less';

import Menu from '../Menu'

import Main from '../Main'
import Contacts from '../Contacts'
import About from '../About'
import Flowers from '../Flowers'


class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="container">
            <Menu />
          </div>

          <div className="container">
              <Switch>
                  <Route exact path='/' component={Main}/>
                  <Route path='/contacts' component={Contacts}/>
                  <Route path='/about' component={About}/>
                  <Route path='/flowers' component={Flowers}/>
              </Switch>
          </div>

      </div>
    );
  }
}

export default App;
