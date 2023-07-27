import * as React from 'react';
import Navigation from './Navigation';
import './App.scss'
import { Grid } from '@mui/material'
import Home from './Components/Home';
import About from './Components/About';
import Experince from './Components/Experince';
import OtherSkills from './Components/OtherSkills';
import ContactMe from './Components/Contact';

export interface IAppProps {
}
export function App(props: IAppProps) {
    return (
        <div className='container'>
            <div className="main">
                <div className="nav">
                    <Navigation />
                </div>
                <div className="sec">
                    <Home />
                    <About />
                    <Experince/>
                    <OtherSkills />
                    <ContactMe/>
                </div>
            </div>
        </div>
    );
}
