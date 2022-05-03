// vitals
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/skills" element={ <Skills/> } />
        <Route exact path="/projects" element={ <Projects/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
