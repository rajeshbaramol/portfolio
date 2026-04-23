import * as React from 'react';
import { Box, List, ListItemButton, ListItemText, ListItemIcon, Divider, Avatar, SwipeableDrawer, useTheme, useMediaQuery } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ContactsIcon from '@mui/icons-material/Contacts';
import ConstructionIcon from '@mui/icons-material/Construction';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ListIcon from '@mui/icons-material/List';
interface INavigationProps {
}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
    const profileImage = 'https://unavatar.io/linkedin/rajesh-bn-7a8854122';
    const theme = useTheme(); // Call the function to get the theme object
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchor, setAnchor] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setAnchor(open);
    };
    const NavBody = React.useMemo(() => <div className='navigation'><Box className='navigation-body'>
        <Box className='profile'>
            <Box className='avatar-body'>
                <Avatar
                    alt="Rajesh Barmol"
                    src={profileImage}
                    sx={{ width: 100, height: 100, margin: 'auto' }}
                    className="avatar"
                />
            </Box>
            <p className='text'>Rajesh Barmol</p>
        </Box>

        <List className='list' onClick={toggleDrawer(false)}>
            <ListItemButton href="#home" >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
            </ListItemButton>
            <Divider className={'dividerColor'} />
            <ListItemButton href="#about">
                <ListItemIcon>
                    <ContactEmergencyIcon />
                </ListItemIcon>
                <ListItemText primary={"About Me"} />
            </ListItemButton>
            <Divider className={'dividerColor'} />
            <ListItemButton href="#experince">
                <ListItemIcon>
                    <DisplaySettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Experience"} />
            </ListItemButton>
            <Divider className={'dividerColor'} />
            <ListItemButton href="#other">
                <ListItemIcon>
                    <ConstructionIcon />
                </ListItemIcon>
                <ListItemText primary={"Tech Stack"} />
            </ListItemButton>
            <Divider className={'dividerColor'} />
            <ListItemButton href="#projects">
                <ListItemIcon>
                    <AutoAwesomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Featured Work"} />
            </ListItemButton>
            <Divider className={'dividerColor'} />
            <ListItemButton href="#contact">
                <ListItemIcon>
                    <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
            </ListItemButton>
            <Divider className={'dividerColor'} />
        </List>
        <Box className='contact-links'>
            <a href="mailto:rajeshbaramol@gmail.com" aria-label="email">
                <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/rajesh-bn-7a8854122/" target="_blank" rel="noreferrer" aria-label="linkedin">
                <LinkedInIcon />
            </a>
        </Box>
    </Box></div>, []);
    return < >{isMobile ? (<>
        <div className='btn-con'>
            <button className='toggler-menu' onClick={() => setAnchor(true)}><ListIcon /></button>
        </div>
        <SwipeableDrawer
            anchor="left"
            open={anchor}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            PaperProps={{
                sx: {
                    width: { xs: '84vw', sm: 320 },
                    maxWidth: 320,
                    backgroundColor: '#090f1d',
                },
            }}
        >
            {NavBody}
        </SwipeableDrawer></>) : NavBody}
    </>
};

export default Navigation;

