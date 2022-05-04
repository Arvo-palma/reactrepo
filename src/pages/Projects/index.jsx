// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// styles
import ProjectsPageStyled from './styles';

// images
import recipesApp from '../../images/RecipesApp.png';
import deliverySystem from '../../images/RestaurantSystem.png';
import deliveryApp from '../../images/deliveryApp.png';
import machineLearning from '../../images/MachineLearning.png';
import algorythms from '../../images/Algorythms.png'

function Projects() {
  return (
    <ProjectsPageStyled id="projectpage">
      <NavBar/>
      <header><h1>Some projects I developed</h1></header>
      <article>
        <h2>Recipes App</h2>
        <img id='recipesapp-img' src={ recipesApp } alt='Login page from recipes app' />
        <p>
          This is a mostly frontend project. A app who uses <a href="https://www.themealdb.com/api.php"> Meals API</a> and <a href="https://www.thecocktaildb.com/api.php ">Cocktail API</a> to combine recipe options for the user.<br/>
          Based in React.js, CSS modules, React Hooks and ContextAPI.
        </p>
        <br/>
        <h2>Delivery System</h2>
        <img src={ deliverySystem } alt='Orders page from delivery app' />
        <img src={ deliveryApp } alt='Schema from delivery app' />
        <p>
          This is a full stack project that applies a complete delivery system with dynamic update.<br/>
          In this project I learned the simple styled-components for CSS and applied React.js and Node.js tools to build. It combines routes, session storage, MySQL with Sequelize, MD5 &amp; JWT validations, MSC architecture and Socket.io.
        </p>
        <br/>
        <h2>Industrial equipment modeling with machine learning</h2>
        <img src={ machineLearning } alt='Orange data mining page' />
        <p>
          This was my chemical engineering graduation project.<br/>
          I used python with the numpy and bioSTEAM libraries to simulate an extractive distillation column. With the data from the simulated equipment, I trained the linear regression and random forest algorithms to mathematically model this equipment.
        </p>
        <br/>
        <h2>Algorythms with python</h2>
        <img src={ algorythms } alt='Code of an algorythm to data scraping' />
        <p>
          I also used python to develop small projects with file manipulation, data scraping and analysis algorithms.
        </p>
        <br/>
      </article>
      <Footer />
    </ProjectsPageStyled>
  )
}   

export default Projects;
