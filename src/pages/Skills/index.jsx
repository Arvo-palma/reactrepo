// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// syles
import SkillsPageStyled from './styles';

function Projects() {
  return (
    <SkillsPageStyled id="skillspage">
      <NavBar/>
      <header><h1>Skills</h1></header>
      <article>
        <div className='computer-skills-div'>
        <h2>Computer Skills</h2>
        <ol>
          <li>
            Git, GitHub and Agile methodologies;
          </li>
          <li>
            HTML, CSS, Javascript and DOM;
          </li>
          <li>
            React.js, React Redux, React Hooks and Context API;
          </li>
          <li>
            MySQL and MongoDB;
          </li>
          <li>
            Node.js, Sockets and Sequelize;
          </li>
          <li>
            Unit tests, async tests and integration tests with Jest, Chai and Sinon;
          </li>
          <li>
            Achitecture SOLID, REST and Deploy;
          </li>
          <li>
            Python for data scraping and algorythms;
          </li>
        </ol>
        </div>
        <br/>
        <div className='soft-skills-div'>
        <h2>Soft Skills</h2>
        <ol>
          <li>
            Teamwork;
          </li>
          <li>
            Leadership;
          </li>
          <li>
            Problem solving;
          </li>
          <li>
            Adaptability;
          </li>
          <li>
            Fast learning;
          </li>
          <li>
            Active listening;
          </li>
          <li>
            Assertive communication;
          </li>
        </ol>
        </div>
        <br/>
        <div className='languages-div'>
        <h2>Languages</h2>
        <ul>
          <li>
            Português (nativo);
          </li>
          <li>
            English (advanced);
          </li>
          <li>
            Español (básico);
          </li>
        </ul>
        </div>
        <br/>
      </article>
      <Footer/>
    </SkillsPageStyled>
  )
}   

export default Projects;
