// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';

// syles
import ProjectsPageStyled from './styles';

function Projects() {
  return (
    <ProjectsPageStyled id="projectpage">
      <NavBar/>
      <article>
        <h1>My life</h1>
        <p>
          Alguma coisa sobre mim, mais alguma coisas sobre mim,
          mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim,
          mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim,
        </p>
      </article>
    </ProjectsPageStyled>
  )
}   

export default Projects;
