// vitals
import styled from 'styled-components';

const AboutPageStyled = styled.section`
background-color: #9FC2CC;
font-family: "Work Sans", sans-serif;
background-size: cover;
display: flex;
flex-direction: column;

  header {
    margin-top: 10%;
    font-size: 5vw;
    margin-left: 1%;
  }

  h2 {
    margin: 2%;
    margin-bottom: 5%;
    font-size: 7vw;
  }
  
  article {
    margin-top: 5%;
    margin-bottom: 5%;
    align-items: right;
  }

  article p {
    margin: 2%;
    font-size: 7vw;
    text-align: center;
  }

  .duration {
    font-size: 6vw;
  }

  .contacts-parafgraph {
    font-size: 6vw;
  }
`;

export default AboutPageStyled;
