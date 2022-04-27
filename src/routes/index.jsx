// vitals
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Presentation from '../pages/Presentation';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Presentation/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
