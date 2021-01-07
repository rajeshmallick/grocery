import React from "react";
import { Nav, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Navbars = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  return (
    <>
      {!loading && isAuthenticated ? (
        <>
          <Navbar bg='light' expand='lg' className='navbar'>
            <Navbar.Brand>
              <Link className='navLink' style={{ color: "black" }} to='/'>
                <h3>Online Grocery</h3>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mx-auto'>
                <Nav.Link>
                  <Link className='navLink' to='/home'>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='navLink' to='/product'>
                    Products
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='navLink' to='/cart'>
                    Cart
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <button
                    className='navLink'
                    style={{ background: "none", border: "none" }}
                    onMouseOver={(e) => (e.target.style.color = "blue")}
                    onMouseOut={(e) => (e.target.style.color = "white")}
                    onClick={logout}
                  >
                    SignOut
                  </button>
                </Nav.Link>
              </Nav>
              <Form inline>
                <h4 className='text-light'>{user && user.name}</h4>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbars);
