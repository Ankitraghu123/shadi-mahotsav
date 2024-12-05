import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';  // Add useLocation import
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../Features/User/UserSlice'; // Make sure this action fetches the user profile after login
import { isFranchise, isLoggedIn } from '../../utils/config';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

function NavScrollExample() {
  const dispatch = useDispatch();
  const profileDetails = JSON.parse(localStorage.getItem("userData"));
  const profileData = useSelector((state) => state.User?.currentUser);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    if (profileDetails?._id) {
      dispatch(getCurrentUser(profileDetails?._id)); // Fetch user data after login
    }
  }, [dispatch]);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // The location change will trigger scrolling to the top

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded} fixed="top" className="Nabvar">
      <Container fluid className="container">
        <Link to="/" onClick={handleNavLinkClick}>
          Shadi <span id="logo">Mahotsav</span>
        </Link>
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
                to="/gallery"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Gallery
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/profile"
                  className="nav-link"
                onClick={handleNavLinkClick}
              >
                All Profile
              </Nav.Link>

            {isLoggedIn() && (
              <Nav.Link
                as={NavLink}
                to="/dashboard/main"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Dashboard
              </Nav.Link>
            )}

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Contact
            </Nav.Link>
          </Nav>

          {isLoggedIn() ? (
            <Link to='/dashboard/user-profile' className='d-flex align-items-center'>
              <img
                width='50px'
                height='50px'
                className='rounded-circle'
                src={profileData?.profilePicture || '/default-avatar.png'}
                alt="Profile"
              />
              <p className='ms-2' id='mb0'>{profileData?.name}</p>
            </Link>
          ) : isFranchise() ? (
            <Link to='/frachise' className='d-flex align-items-center'>
            <p className='ms-2' id='mb0'>Go To Franchise Pannel</p>
          </Link>
          ) : (
           <Button className='px-4'>
             <Link to="/login" onClick={handleNavLinkClick}  className="text-white text-decoration-none">
              Login / Register
            </Link>
           </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
