import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        'Iron Man', 
        'Captain America', 
        'Thor', 
        'The Hulk', 
        'Black Widow', 
        'Hawkeye', 
        'Black Panther',
        'Spider-Man',
        'Doctor Strange',
        'Ant-Man',
        'War Machine',
        'Falcon',
        'Vision',
        'Scarlet Witch',
        'The Winter Soldier',
        'Star Lord',
        'Gamora',
        'Drax the Destroyer',
        'Rocket Raccoon',
        'Groot',
        'Mantis',
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Avengers: by Rahul Desai</h1>
        {this.state.avengers.map((avenger, i) => <p key={i}>{avenger}</p>)}
      </div>
    );
  }
}

export default App;
