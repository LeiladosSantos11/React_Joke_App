import React, { Component }from 'react';
import logo from './logo.svg'


class Header extends Component {
    render() {
      return (
        <div className="Header">
          <img class='logo'src={logo} alt= 'The Co-operative Bank logo' />
          <h1>TECH TEST _ FRONT END</h1>
          <hr></hr>
        </div>
          
      );
  }
}

export default Header;