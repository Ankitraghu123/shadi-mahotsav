import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded} fixed="top" className="Nabvar">
      <Container fluid className="container">
        <Navbar.Brand as={NavLink} to="/" onClick={handleNavLinkClick}>
          Shadi <span id="logo">Mahotsav</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : true)}
        />
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
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/pricing"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Plans
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/register"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Register
            </Nav.Link>

            <NavDropdown title="All pages" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/login" onClick={handleNavLinkClick}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/register" onClick={handleNavLinkClick}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/edit" onClick={handleNavLinkClick}>
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/gallery" onClick={handleNavLinkClick}>
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/profile" onClick={handleNavLinkClick}>
                All Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/profile-detail" onClick={handleNavLinkClick}>
                Profile Detail
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/dashboard/main" onClick={handleNavLinkClick}>
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/user-profile" onClick={handleNavLinkClick}>
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/profile-edit" onClick={handleNavLinkClick}>
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/user-interests" onClick={handleNavLinkClick}>
                Interest
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/chat" onClick={handleNavLinkClick}>
                Chat Lists
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/plane" onClick={handleNavLinkClick}>
                My Plan Details
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard/user-setting" onClick={handleNavLinkClick}>
                Setting
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Contact
            </Nav.Link>
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
