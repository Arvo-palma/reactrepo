// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';

// styles
import AboutPageStyled from './styles';
import Footer from '../../components/Footer';

function About() {
  return (
    <AboutPageStyled id="aboutpage">
      <NavBar/>
      <header><h1>About me</h1></header>
      <article>
        <h2>Journey</h2>
        <p>
        Born July 9, 1991. I have always enjoyed challenges and doing things that positively impact the people around me. I experienced studies in the area of law school, business administration and environmental management.<br/>
        <br/>
        While I was always looking for something that would have more impact on the lives of the people around me, I ended up majoring in chemical engineering. And it was in this area that I got to know programming for the first time. <br/>
        </p>
        <br/>
        <h2>Formation</h2>
        <ul>
        <li><b>Trybe: Technology School</b>
          <br/>
          <span className='duration'>April 2021 - April 2022</span>
          <br/>
          FullStack Developer Certificate
        </li>
        <br/>
        <li><b>Federal University of Latin-American Integration, Paraná, Brazil</b>
        <br/>
        <span className='duration'>January 2015 – May 2022</span>
        <br/>
        Chemical Engineering (Bachelor Degree)
        </li>
        <br/>
        <li><b>Technological Federal University of
        Paraná, Brazil</b>
        <br/>
        <span className='duration'>August 2012 – January 2015</span>
        <br/>
        Environmental Coordinator
        Certificate
        </li>
        </ul>
        <br/>
        <h2>Hobbies</h2>
        <p>
          In my spare time I really enjoy playing board games with my friends, especially roleplaying games. I'm always reading a book or following fantasy or fiction series in parallel with my technical reading to keep my studies up to date.
        </p>
      </article>
      <Footer/>
    </AboutPageStyled>
  )
}   

export default About;
