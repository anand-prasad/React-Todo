/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {Row,Navbar, Nav, NavItem} from 'react-bootstrap';
import { Router, Route, Link } from 'react-router'


export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Task Todo App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"><Link to="/ConfigureTask">Configure Task</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/taskList">Task List</Link></NavItem>
            <NavItem eventKey={3} href="#"><Link to="/About">About</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <div className="container">
        {React.Children.toArray(this.props.children)}
        </div>
      </div>
    );
  }
}
