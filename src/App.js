import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinhiveCaptcha from './lib'

class App extends Component {
  render() {
    return (
      <div className="App">
       <CoinhiveCaptcha />
      </div>
    );
  }
}

export default App;
