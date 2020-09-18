import React, { Component } from 'react';
import logo from './logo.svg';
import './css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React</h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <img src={logo} />
      </div>
    );
  }
}

export default App;
