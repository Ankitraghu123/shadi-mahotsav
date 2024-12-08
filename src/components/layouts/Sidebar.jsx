import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import './App.css'; // Import your CSS file here

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='container'>
        <Navbar.Brand as={NavLink} to="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id="naving"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              as={NavLink}
              to="/"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              Contact
            </Nav.Link>

            <NavDropdown title="All pages" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/register">Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/edit">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/profile">All Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/profile-detail">Profile Detail</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/dashboard/main">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/user-profile">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/profile-edit">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/user-interests">Interest</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/chat">Chat Lists</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/plane">My Plan Details</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/user-setting">Setting</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
