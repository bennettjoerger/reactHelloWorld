import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>
    );
  }
}

class Intro extends Component {
  render(){
    return(
    <div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
    );
  }
}

export default App;
