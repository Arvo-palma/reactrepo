// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// syles
import HomePageStyled from './styles';

// image
import photo from '../../images/LinkedInPhoto.jpeg';

function Home() {
  return (
    <HomePageStyled id="homepage">
      <NavBar/>
      <div className='hello'>
      <header><b>Hi, I'm Álvaro!</b></header>
      <aside>
        <img src={photo} alt='Álvaro in computer' />
      </aside>
      <article>
        <p>
          I'm a Full Stack developer with focus on React.js and Node.js, but I have experience with data scraping using python and have already developed machine learning research for modeling and optimizing industrial chemical equipment.
        </p>
        <p>
          Please browse the sections of this website I've developed to learn more about me and my work.
        </p>
        <br/>
        <p className='contacts-paragraph'>
          <b>Contacts:</b>
          <br/>
            <a href='mailto:contact.alvaro.palma@gmail.com'>
              contact.alvaro.palma@gmail.com
            </a><br/>
            <a href='https://www.linkedin.com/in/alvaro-palma/'>
            linkedin.com/in/alvaro-palma/
            </a><br/>
            +55 (45) 99999-0001<br/>
        </p>
      </article>
      </div>
      <Footer/>
    </HomePageStyled>
  )
}   

export default Home;
