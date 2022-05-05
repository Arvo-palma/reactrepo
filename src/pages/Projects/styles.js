// vitals
import styled from 'styled-components';

const ProjectsPageStyled = styled.section`
background-color: #9FC2CC;
font-family: "Work Sans", sans-serif;
background-size: cover;
display: flex;
flex-direction: column;

  header h1 {
    margin-top: 15%;
    font-size: 7vw;
    margin-left: 1%;
    margin-bottom: 4%;
  }

  h2 {
    margin: 2%;
    font-size: 7vw;
  }
  
  img {
    width: 100%;
  }

  #recipesapp-img {
    height: 70vh;
  }

  article p {
    text-align: justified;
    margin: 1%;
    font-size: 5vw;
  }

  @media screen and (min-width: 500px) and (max-width: 675px) {
    header h1 {
      font-size: 5vw;
      margin-bottom: 3%;
    }

    img {
      width: 80%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    h2 {
      font-size: 6vw;
    }

    article p {
      font-size: 4vw;
      margin-bottom: 3%;
    }
  }

  @media screen and (min-width: 675px) {
    header h1 {
      margin-top: 5%;
      font-size: 2vw;
      margin-left: 1%;
      margin-bottom: 2%;
    }
  
    article h2 {
      margin: 1%;
      font-size: 2vw;
      text-align: center;
    }

    article {
      margin-bottom: 2%;
    }
    
    article img {
      width: 48%;
    }

    #recipesapp-img {
      width: 40%;
    }

    .delivery-imgs {
      display: flex;
      flex-direction: column;
    }

    #orders-img {
      width: 70%;
      margin: auto;
    }

    #schema-img {
      width: 70%;
      margin: auto;
    }

    #MLimage {
      width: 75%;
    }

    #algorythmimg {
      width: 85%;
    }
  
    #recipesapp-img {
      height: 50vh;
    }
  
    article p {
      text-align: center;
      margin: 1%;
      font-size: 1.5vw;
      margin-bottom: 3%;
    }

    .jsprojects-div {
      display: flex;
    }

    .pyprojects-div {
      display: flex;
    }

    .project-div {
      width: 50%;
      margin-left: 5%;
      text-align: center;
    }
  }
`;

export default ProjectsPageStyled;
