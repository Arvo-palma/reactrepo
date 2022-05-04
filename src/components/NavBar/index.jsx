// vitals
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import NavBarStyled from './styles';

function NavBar() {
  return (
    <NavBarStyled id="navbar">
      <div>
        <Link
          className='nav_option'
          data-testid="home__element-navbar-link"
          to={ '/' }
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          className='nav_option'
          data-testid="about__element-navbar-link"
          to={ '/about' }
        >
          About
        </Link>
      </div>
      <div>
        <Link
          className='nav_option'
          data-testid="skills__element-navbar-link"
          to={ '/skills' }
        >
          Skills
        </Link>
      </div>
      <div>
        <Link
          className='nav_option'
          data-testid="projects__element-navbar-link"
          to={ '/projects' }
        >
          Projects
        </Link>
      </div>
    </NavBarStyled>
  );
}

export default NavBar;
