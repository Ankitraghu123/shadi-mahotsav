import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../Features/User/UserSlice';
import { isFranchise, isLoggedIn } from '../../utils/config';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import logo from '../../assets/download.png';

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
  }, [location]);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded} fixed="top" className="Nabvar">
      <Container fluid className="container">
        <Link to="/" onClick={handleNavLinkClick}>
          <img width="150px" src={logo} />
        </Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id="naving"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link
              as={NavLink}
              to="/"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={({ isActive }) => ({
                color: isActive ? 'yourColorHere' : '',
              })}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={({ isActive }) => ({
                color: isActive ? 'yourColorHere' : '',
              })}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/pricing"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={({ isActive }) => ({
                color: isActive ? 'yourColorHere' : '',
              })}
            >
              Plans
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/gallery"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={({ isActive }) => ({
                color: isActive ? 'yourColorHere' : '',
              })}
            >
              Gallery
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/profile"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={({ isActive }) => ({
                color: isActive ? 'yourColorHere' : '',
              })}
            >
              All Profile
            </Nav.Link>

            {isLoggedIn() && (
              <Nav.Link
                as={NavLink}
                to="/dashboard/main"
                className="nav-link"
                onClick={handleNavLinkClick}
                style={({ isActive }) => ({
                  color: isActive ? 'yourColorHere' : '',
                })}
              >
                Dashboard
              </Nav.Link>
            )}

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={({ isActive }) => ({
                color: isActive ? 'yourColorHere' : '',
              })}
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
              <Link to="/login" onClick={handleNavLinkClick} className="text-white text-decoration-none">
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
