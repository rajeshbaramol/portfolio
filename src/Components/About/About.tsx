import React, { useEffect, useState } from 'react';
import { Divider, LinearProgress, LinearProgressProps, Box, Typography } from '@mui/material';

interface IAboutProps { }
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35, }} >
                <Typography variant="body2" sx={{ color: '#fff', }}>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}
interface IState {
    r: number;
    j: number;
    t: number;
    c: number;
    h: number;
    [key: string]: number; // Index signature to allow accessing properties using dynamic keys
  }
const skillsTarget:IState = {
    r: 80,
    j: 80,
    t: 60,
    c: 70,
    h: 70,
};
const About: React.FunctionComponent<IAboutProps> = (props) => {
    const [state, setState] = useState<IState>({
        r: 0,
        j: 0,
        t: 0,
        c: 0,
        h: 0,
    });

    useEffect(() => {
        const updateSkillsSequentially = () => {
            let currentSkill = 'r';
            const intervalId = setInterval(() => {
                setState((prevState) => {
                    const updatedState = { ...prevState };
                    updatedState[currentSkill] = Math.min(
                        updatedState[currentSkill] + 1,
                        skillsTarget[currentSkill]
                    );

                    // Move to the next skill once the current skill reaches its target
                    if (updatedState[currentSkill] >= skillsTarget[currentSkill]) {
                        currentSkill = getNextSkill(currentSkill);
                    }

                    return updatedState;
                });
            }, 30); // Adjust the interval time for smoothness (smaller value for smoother animation)

            return () => clearInterval(intervalId);
        };

        const getNextSkill = (currentSkill: string) => {
            const skillKeys = Object.keys(skillsTarget);
            const currentIndex = skillKeys.indexOf(currentSkill);
            const nextIndex = (currentIndex + 1) % skillKeys.length;
            return skillKeys[nextIndex];
        };

        const allSkillsReachedTarget = () =>
            Object.keys(skillsTarget).every(
                (skillName) => state[skillName] >= skillsTarget[skillName]
            );

        const intervalId = setInterval(() => {
            if (allSkillsReachedTarget()) {
                clearInterval(intervalId);
            }
        }, 100);

        // Load the skills' progress bars only when the component is mounted
        updateSkillsSequentially();

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='about-container' id="about">
            <div className='title'>
                <h3>About me</h3>
            </div>
            <div className='about-text'>
                <p>
                    As a Bengaluru-based Front-end Developer with over 6 years of experience, I specialize in coding and creating web
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
                            <LinearProgressWithLabel value={state.r} variant="determinate" className='bar' />
                        </div>

                        <div className='skill'>
                            <h6>JavaScript</h6>
                            <LinearProgressWithLabel value={state.j} variant="determinate" className='bar' />
                        </div>
                        <div className='skill'>
                            <h6>TypeScript</h6>
                            <LinearProgressWithLabel value={state.t} variant="determinate" className='bar' />
                        </div>
                        <div className='skill'>
                            <h6>HTML/CSS</h6>
                            <LinearProgressWithLabel value={state.c} variant="determinate" className='bar' />
                        </div>
                        <div className='skill'>
                            <h6>Node Js</h6>
                            <LinearProgressWithLabel value={state.h} variant="determinate" className='bar' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
