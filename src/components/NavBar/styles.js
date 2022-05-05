// vitals
import styled from 'styled-components';

const NavBarStyled = styled.nav`
  align-items: center;
  background-color: #4C5B5C;
  display: flex;
  font-family: "Work Sans", sans-serif;
  justify-content: space-around;
  position: fixed;
  width: 100%;

  > div {
    display: flex;

    a {
      color: white;
      padding: 10% 20%;
      text-decoration: none;
      text-transform: uppercase;
    }

    .nav_option {
      font-size: 4vw;
    }

    @media screen and (min-width: 500px) {
      .nav_option {
        font-size: 3.5vw;
      }  
    }

    @media screen and (min-width: 675px) {
      .nav_option {
        font-size: 1.5vw;
      }  
    }
`;

export default NavBarStyled;
