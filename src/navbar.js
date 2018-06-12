import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu'

class NavBar extends Component {

  showSettings (event) {
  event.preventDefault();
}

  render() {
    return (
      <div className="navbar">
        <div className='navbar-brand'>  Sens.ai </div>
      </div>
    );
  }
}

export default NavBar;
