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

  @media screen and (min-width: 500px) and (max-width: 675px) {

    header {
      margin-top: 15%;
      font-size: 8vw;
      margin-left: 3%;
    }

    aside {
      margin-top: 5%;
    }

    img {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }

    article p {
      margin: 2%;
      font-size: 5vw;
      text-align: center;
    }

    .contacts-paragraph {
      font-size: 4vw;
      text-align: left;
    }
  }

  @media screen and (min-width: 675px) {
    .hello {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    header {
      order: 1;
      margin-top: 15%;
      font-size: 5vw;
      margin-left: 10%;
      width: 45%;
    }
  
    img {
      order: 0;
      width: 100%;
      border-radius: 3%;
    }
  
    aside {
      margin-top: 6%;
      margin-left: 3%;
      width: 30%;
    }
    
    article {
      margin-top: 0;
      margin-left: 5%;
      order: 3;
      align-self: flex-end;
    }
  
    article p {
      width: 80%;
      margin: 2%;
      font-size: 2vw;
      text-align: center;
    }
  
    .contacts-paragraph {
      font-size: 2vw;
      text-align: left;
    }  
  }
`;

export default HomePageStyled;
