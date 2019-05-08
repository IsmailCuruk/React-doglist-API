import React from 'react';
import './App.css';
import DogsList from './components/DogsList'
import request from 'superagent'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>
          Exercise Week 3/ Day 3:
        </h1>
        </header>
        <main>
          <DogsList />
        </main>
      </div>
    );
  }
}

export default App;
