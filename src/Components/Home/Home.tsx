import  React, { useState, useEffect }  from 'react';

import { Box, Avatar, Grid } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
interface IHomeProps {
}

  const TypingEffect = ({ texts }) => {
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
  const texts = [
    "I'm a Passionate web developer",
    'Welcome to my portfolio',
    'Contact me for collaborations',
    'Thank you for visiting!',
  ];

  return (
    <div className='home-container' id='home'>
      <Grid container>
        <Grid item md={6}>
          <div className='title'>
            <h2 className='hello'>Hello, I am</h2>
            <h1 className='name'>Rajesh barmol</h1>
            <div className='text'>
              {/* Use the TypingEffect component with the array of texts */}
              <TypingEffect texts={texts} />
            </div>
            <p className='text'>
              As a React developer, I create modern websites and web services, delivering exceptional user experiences
              for clients of all sizes.
            </p>
            <div>
              <button className='button'>Download CV</button>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <Box className='profile'>
            <Box className='avatar-body'>
              <Avatar
                alt='Rajesh Barmol'
                src='https://media.licdn.com/dms/image/D5603AQGr-ZDDdA44TQ/profile-displayphoto-shrink_800_800/0/1686858115322?e=1695859200&v=beta&t=XNLtKcmNpPTDvprb5EYu3_doerWMjxuivl8ZUFaB5JA'
                sx={{ width: 300, height: 300, margin: 'auto' }}
                className='avatar'
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>)
};

export default Home;
