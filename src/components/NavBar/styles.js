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
`;

export default NavBarStyled;
