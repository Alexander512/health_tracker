import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to='/measures'>Biometric Measurements</Link>
          <Link to='/measures/new'>Create New Measurement</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
