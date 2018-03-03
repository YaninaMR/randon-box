import React, { Component } from 'react';
import './App.css';

var generateColor = number => Math.floor(Math.random() * (number + 1)); 
var color = 'rgb(' + generateColor(255) + ',' + generateColor(255) + ',' + generateColor(255) + ')';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Randon box React</h1>
        </header>
        <div className="box" style={{background:color}}>
          <p className="letter-box">Box</p>
        </div>
      </div>
    );
  }
}

export default App;
