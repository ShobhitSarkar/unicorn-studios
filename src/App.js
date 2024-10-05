import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './Components/pages/LandingPage/LandingPage';
import Portfolio from './Components/pages/Portfolio/Portfolio';
import Navbar from './Components/Common/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Add more routes for other pages as you create them */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;