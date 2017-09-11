import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect } from 'react-redux';
import Square1 from './containers/square1/square1.js';
import Square2 from './containers/square2/square2.js';
import Square3 from './containers/square3/square3.js';
import Square4 from './containers/square4/square4.js';
import Square5 from './containers/square5/square5.js';
import Square6 from './containers/square6/square6.js';
import Square7 from './containers/square7/square7.js';
import Square8 from './containers/square8/square8.js';
import Square9 from './containers/square9/square9.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <Square1/>
          <Square2/>
          <Square3/>
        </div>
         <div className="row">
          <Square4/>
          <Square5/>
          <Square6/>
        </div>
        <div className="row">
          <Square7/>
          <Square8/>
          <Square9/>
          </div>
      </div>
    );
  }
}

export default connect((state) => {
console.log(state)
  return {
    state
  }
} )(App);
