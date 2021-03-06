
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import Header from './Components/Header/Header.js';
import Main from './Components/MainContent/Main.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}


export default App;
