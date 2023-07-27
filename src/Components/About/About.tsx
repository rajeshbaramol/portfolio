import React from 'react';
import { Divider, LinearProgress } from '@mui/material';

interface IAboutProps { }

const About: React.FunctionComponent<IAboutProps> = (props) => {
    return (
        <div className='about-container' id="about">
            <div className='title'>
                <h3>About me</h3>
            </div>
            <div className='about-text'>
                <p>
                    As a Bengaluru-based Front-end Developer with over 3 years of experience, I specialize in coding and creating web
                    elements that bring exceptional user experiences to life. My expertise lies in crafting responsive and interactive
                    interfaces using HTML, CSS, and JavaScript. I am passionate about staying up-to-date with the latest front-end technologies
                    and best practices to deliver visually appealing and user-friendly web solutions. My goal is to create web elements that
                    not only meet client expectations but also leave a lasting impact on users.
                </p>
            </div>

            <Divider />

            <div className='title'>
                <h3>Education & Skills</h3>
            </div>
            <div className='section'>
                <ul className='aducation-box'>
                    <li><span>2012-2016</span>
                        <h6>EEE in BE/Btch</h6>
                        <p>JNNCE, Shimoga(VTU) </p>
                    </li>
                    <li><span>2010-2012</span>
                        <h6>12th</h6>
                        <p>DVS, Shimoga </p>
                    </li>
                    <li><span>2009-2010</span>
                        <h6>10th</h6>
                        <p>JSS mysore </p>
                    </li>
                </ul>

                <div className='skills'>
                    <h3>My skills</h3>
                    <div>
                        <div className='skill'>
                            <h6>React js</h6>
                            <LinearProgress value={80} variant="determinate" className='bar'/>
                        </div>

                        <div className='skill'><h6>JavaScript</h6>
                            <LinearProgress value={80} variant="determinate" className='bar'/>
                        </div>
                        <div className='skill'>
                            <h6>TypeScript</h6>
                            <LinearProgress value={60} variant="determinate" className='bar'/>
                        </div>
                        <div className='skill'>
                            <h6>CSS3</h6>
                            <LinearProgress value={70} variant="determinate" className='bar'/>
                        </div>
                        <div className='skill'>
                            <h6>HTML</h6>
                            <LinearProgress value={70} variant="determinate" className='bar'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
