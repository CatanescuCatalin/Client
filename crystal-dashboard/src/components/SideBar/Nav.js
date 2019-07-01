import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>

        <li className={location.pathname === '/users' ? 'active' : null}>
          <Link to="/users">
            <i className="pe-7s-users"></i>
            <p>Users</p>
          </Link>
        </li>

        <li className={location.pathname === '/cars' ? 'active' : null}>
          <Link to="/cars">
            <i className="pe-7s-car"></i>
            <p>Cars</p>
          </Link>
        </li>

        <li className={location.pathname === '/add-car' ? 'active' : null}>
          <Link to="/add-car">
            <i className="pe-7s-plus"></i>
            <p>Add Car</p>
          </Link>
        </li>

        <li className={this.isPathActive('/maps/google-map') ? 'active' : null}>
                  <Link to="/maps/google-map">Google Map</Link>
        </li>

        

      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);