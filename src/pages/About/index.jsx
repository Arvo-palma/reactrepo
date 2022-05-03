// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';

// syles
import AboutPageStyled from './styles';

function About() {
  return (
    <AboutPageStyled id="aboutpage">
      <NavBar/>
      <article>
        <h1>My life</h1>
        <p>
          Alguma coisa sobre mim, mais alguma coisas sobre mim,
          mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim,
          mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim,
        </p>
      </article>
    </AboutPageStyled>
  )
}   

export default About;
