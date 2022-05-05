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

  article ul li {
    font-size: 5vw;
    margin-left: 1%;
  }

  .duration {
    font-size: 6vw;
  }

  @media screen and (min-width: 500px) and (max-width: 675px) {
    header {
      font-size: 3vw;
    }

    article p {
      margin: 2%;
      font-size: 4vw;
      text-align: center;
    }

    article h2 {
      margin: 2%;
      margin-bottom: 5%;
      font-size: 5vw;
    }

    .duration {
      font-size: 4vw;
    }  
  }

  @media screen and (min-width: 675px) {
    header {
      margin-top: 6%;
      font-size: 1vw;
      margin-left: 1%;
      margin-bottom: 2%;
    }
  
    article h2 {
      margin-top: 0;
      margin-bottom: 1%;
      font-size: 1.5vw;
    }
    
    article {
      margin-top: 0%;
      margin-bottom: 5%;
      align-items: right;
    }
  
    article p {
      margin: 1%;
      font-size: 1.5vw;
      text-align: center;
    }
  
    article ul li {
      font-size: 1.5vw;
      margin-left: 4%;
    }

    article ul {
      margin-bottom: 2%;
    }
  
    .duration {
      font-size: 1vw;
    }
  }
`;

export default AboutPageStyled;
