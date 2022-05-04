// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// syles
import ProjectsPageStyled from './styles';

function Projects() {
  return (
    <ProjectsPageStyled id="projectpage">
      <NavBar/>
      <header><h1>Some projects I developed</h1></header>
      <article>
        <h2>Delivery App</h2>
        <p>
          Aqui descrevo esse projeto e coloco link do gitHub
        </p>
        <br/>
        <h2>Restaurant System</h2>
        <p>
          Aqui descrevo esse projeto e coloco link do gitHub
        </p>
        <br/>
        <h2>Industrial equipment modeling with machine learning</h2>
        <p>
          Aqui descrevo esse projeto e coloco link do gitHub
        </p>
        <br/>
        <h2>Algorythms with python</h2>
        <p>
          Aqui descrevo esse projeto e coloco link do gitHub
        </p>
        <br/>
      </article>
      <Footer />
    </ProjectsPageStyled>
  )
}   

export default Projects;
