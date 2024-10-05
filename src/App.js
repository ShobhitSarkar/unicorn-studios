import React, { useEffect } from 'react';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import Navbar from './Components/Common/Navbar';
import { LandingPage } from './Components/pages/LandingPage/LandingPage';
import About from './Components/pages/About/About';
import Portfolio from './Components/pages/Portfolio/Portfolio';
import Services from './Components/pages/Services/Services';
import Contact from './Components/pages/Contact/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // Smooth scroll to section when URL changes
    const handleURLChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }
    };

    window.addEventListener('hashchange', handleURLChange);
    handleURLChange(); // Handle initial URL

    return () => window.removeEventListener('hashchange', handleURLChange);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Element name="home"><LandingPage /></Element>
      <Element name="about"><About /></Element>
      <Element name="portfolio"><Portfolio /></Element>
      <Element name="services"><Services /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  );
}

export default App;