import * as React from 'react';
import Navigation from './Navigation';
import './App.scss';
import { Grid } from '@mui/material';
import Home from './Components/Home';
import About from './Components/About';
import Experince from './Components/Experince';
import OtherSkills from './Components/OtherSkills';
import ContactMe from './Components/Contact';

export interface IAppProps {}

export function App(props: IAppProps) {
  React.useEffect(() => {
    // Function to gradually increase the opacity from 0 to 1
    const fadeInPages = () => {
      const pageContainers = document.querySelectorAll('.page-container');

      let opacity = 0;
      const increment = 0.01; // Adjust the increment value for smoother animation

      const fadeInInterval = setInterval(() => {
        opacity += increment;
        if (opacity >= 1) {
          clearInterval(fadeInInterval);
          opacity = 1;
        }

        // Apply the updated opacity to all page containers
        pageContainers.forEach((container) => {
          container.style.opacity = opacity;
        });
      }, 20); // Adjust the interval time for smoother animation (smaller value for smoother animation)
    };

    fadeInPages();
  }, []);

  return (
    <div className='container'>
      <div className="main">
        <div className="nav">
          <Navigation />
        </div>
        <div className="sec">
          <div className="page-container">
            <Home />
          </div>
          <div className="page-container">
            <About />
          </div>
          <div className="page-container">
            <Experince />
          </div>
          <div className="page-container">
            <OtherSkills />
          </div>
          <div className="page-container">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}
