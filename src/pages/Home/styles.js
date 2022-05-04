// vitals
import styled from 'styled-components';

const HomePageStyled = styled.section`
background-color: #9FC2CC;
font-family: "Work Sans", sans-serif;
background-size: cover;
display: flex;
flex-direction: column;

  header {
    margin-top: 20%;
    font-size: 10vw;
    margin-left: 3%;
  }

  img {
    width: 100%;
  }

  aside {
    margin-top: 10%;
  }
  
  article {
    margin-top: 10%;
    align-items: right;
  }

  article p {
    margin: 2%;
    font-size: 7vw;
    text-align: center;
  }

  .contacts-paragraph {
    font-size: 6vw;
  }
`;

export default HomePageStyled;
