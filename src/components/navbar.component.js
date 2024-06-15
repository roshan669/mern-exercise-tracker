import React,{Component} from "react";
import { Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class NavBar extends Component {
render(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">ExerTracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Exercises</Nav.Link>
                <Nav.Link as={Link} to="/create">Create Exercise Log</Nav.Link>
                <Nav.Link as={Link} to="/user">Create User</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }
}

