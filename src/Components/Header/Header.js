import React, { Component }from 'react';
import logo from './logo.svg'


class Header extends Component {
    render() {
      return (
        <div className="Header">
          <img className="imagelogo" src={logo} alt= 'The Co-operative Bank logo' />
          <h3 className="firstHeading">Tech test - Front end</h3>
          <hr></hr>
        </div>
          
      );
  }
}

export default Header;