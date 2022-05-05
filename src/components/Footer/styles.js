// vitals
import styled from 'styled-components';

const FooterStyled = styled.footer`
background-color: #9FC2CC;
font-family: "Work Sans", sans-serif;
background-size: cover;
display: flex;
flex-direction: column;

  footer {
    margin: 2%;
    font-size: 4vw;
  }

  @media screen and (min-width: 675px) {
    footer {
      margin: 1%;
      font-size: 1.5vw;
    }
`;

export default FooterStyled;
