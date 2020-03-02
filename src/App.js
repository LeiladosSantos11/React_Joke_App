
import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Main from './Components/MainContent/Main.js';
import Searchcard from './Components/MainContent/Searchcard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Searchcard />
        
      </div>
    );
  }
}

export default App;
