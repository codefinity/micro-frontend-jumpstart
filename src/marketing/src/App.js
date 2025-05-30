import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Landing />} />
          <Route path='*' component={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};
