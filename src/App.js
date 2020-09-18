import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>React</h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <img src={logo} />
      </div>
    );
  }
}

export default App;
