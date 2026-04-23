import React, { useState, useEffect } from 'react';

import { Box, Avatar, Grid, useMediaQuery, useTheme } from '@mui/material'
interface IHomeProps {
}

interface TypingEffectProps {
  texts: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + texts[currentIndex][index]);
      index++;
      if (index === texts[currentIndex].length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Wait for 2 seconds before starting the next typing animation
      }
    }, 100); // Adjust the typing speed here (smaller value for faster typing)

    return () => {
      clearInterval(intervalId);
    };
  }, [texts, currentIndex]);

  return <>{displayText}</>;
};

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const profileImage = 'https://unavatar.io/linkedin/rajesh-bn-7a8854122';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const highlights = [
    { label: 'Experience', value: '8+ Years' },
    { label: 'Spotlight Awards', value: '3x Winner' },
    { label: 'Load Time Gain', value: '25% Faster' },
  ];
  const texts = [
    "Tech Delivery Director & Front-End Developer",
    "React.js, TypeScript, Next.js, Node.js",
    "AI-powered products with modern UX",
    "Let's build scalable digital platforms",
  ];

  return (
    <div className='home-container' id='home'>
      <Grid container>
        <Grid item xs={12} md={6} style={{ order: isMobile ? 2 : 1 }}>
          <div className='title'>
            <div className='badge-row'>
              <span className='badge'>Open to Leadership Roles</span>
              <span className='badge secondary'>Available for Consulting</span>
            </div>
            {!isMobile && <h2 className='hello'>Hello, I am</h2>}
            <h1 className='name'>Rajesh BN</h1>
            <div className='text'>
              <TypingEffect texts={texts} />
            </div>
            <p className='text description'>
              Dynamic engineering leader with strong expertise in scalable front-end architecture,
              cross-functional delivery, and AI/LLM-enabled product experiences.
            </p>
            <div className='cta-row'>
              <a className='button' href='/Rajesh_BN_Resume.pdf' download='Rajesh_BN_Resume.pdf'>Download Resume</a>
              <a className='button ghost' href='https://www.linkedin.com/in/rajesh-bn-7a8854122/' target='_blank' rel='noreferrer'>View LinkedIn</a>
            </div>
            <div className='highlight-grid'>
              {highlights.map((item) => (
                <div className='highlight-card' key={item.label}>
                  <h4>{item.value}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ order: isMobile ? 1 : 2 }}>
          <Box className='profile'>
            <Box className='avatar-body'>
              <Avatar
                alt='Rajesh Barmol'
                src={profileImage}
                // sx={{ width: isMobile ? 200 : 300, height: isMobile ? 200 : 300, margin: 'auto' }}
                className='avatar'
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>)
};

export default Home;
