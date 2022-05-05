// vitals
import styled from 'styled-components';

const SkillsPageStyled = styled.section`
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

  ol {
    margin-left: 2%;
  }

  li {
    margin-bottom: 2%;
    font-size: 5vw;
  }

  @media screen and (min-width: 500px) and (max-width: 675px) {
    header {
      font-size: 3vw;
    }

    h2 {
      font-size: 5vw;
      margin-bottom: 3%;
    }

    li {
      font-size: 4vw;
    }
  }

  @media screen and (min-width: 675px) {
    header {
      margin-top: 5%;
      margin-bottom: 1%;
      font-size: 1vw;
      margin-left: 1%;
    }
  
    article h2 {
      margin: 2%;
      margin-bottom: 3%;
      font-size: 2vw;
    }

    article {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8%;
    }
  
    ol {
      margin-left: 2%;
    }
  
    article ol li {
      margin-left: 3%;
      margin-bottom: 2%;
      font-size: 1.5vw;
    }

    article ul li {
      margin-left: 3%;
      margin-bottom: 2%;
      font-size: 1.5vw;
    }
  }
`;

export default SkillsPageStyled;
