import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form  className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button variant="primary" size="lg" >Search</button>
          </form>
        </nav>
      </div>

    );
	}
}

export default NavBar;