import React, { Component } from 'react';
import './App.css';
import {NameGen} from './namegen/NameGen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Custom Tweet Graphic Generator!</h1>
        </header>
        <NameGen/>
      </div>
    );
  }
}

export default App;
