import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ingredients from './pages/Ingredients';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingredients />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
