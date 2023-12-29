import React, {useRef, useEffect } from 'react';
import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home.jsx';
import About from './component/Navbarlinkscompo/About.jsx';
import Project from './component/Navbarlinkscompo/Project.jsx';
import Portfolio from './component/Navbarlinkscompo/Portfolio.jsx';
import Contact from './component/Navbarlinkscompo/Contact.jsx';
import Footer from './component/Navbarlinkscompo/Footer.jsx';


function App() {

  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('.scroll-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('data-target');
        
        if (targetId === 'home') {
          // If clicking on the "Home" link, scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          // If clicking on other links, scroll to the target element
          handleScroll(targetId);
        }
      });
    });
  }, []);


  return (
   
      <div>
        <Navigation />
       
          <Home ref={homeRef} />
          <About />
          <Project />
          <Portfolio />
          <Contact />
         <Footer/>
      </div>
    
  );
}

export default App;
