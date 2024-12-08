import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
