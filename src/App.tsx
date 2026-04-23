import * as React from 'react';
import Navigation from './Navigation';
import './App.scss';
import Home from './Components/Home';
import About from './Components/About';
import Experince from './Components/Experince';
import OtherSkills from './Components/OtherSkills';
import Projects from './Components/Projects';
import ContactMe from './Components/Contact';

export interface IAppProps {}

export function App(props: IAppProps) {
  return (
    <div className="container">
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
            <Projects />
          </div>
          <div className="page-container">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}
