// vitals
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import NavBarStyled from './styles';

function NavBar() {
  return (
    <NavBarStyled id="navbar">
      <div>
        <Link
          className='home-button'
          data-testid="home__element-navbar-link"
          to={ '/' }
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          className='about-button'
          data-testid="about__element-navbar-link"
          to={ '/about' }
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          className='skills-button'
          data-testid="skills__element-navbar-link"
          to={ '/skills' }
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          className='projects-button'
          data-testid="projects__element-navbar-link"
          to={ '/projects' }
        >
          Home
        </Link>
      </div>
    </NavBarStyled>
  );
}

NavBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default NavBar;
