import * as React from 'react';
import { Box, List, ListItemButton, ListItemText, ListItemIcon, Divider, Avatar, Button, SwipeableDrawer, useTheme, useMediaQuery } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ContactsIcon from '@mui/icons-material/Contacts';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ListIcon from '@mui/icons-material/List';
interface INavigationProps {
}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
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
                    src="https://media.licdn.com/dms/image/D5603AQGr-ZDDdA44TQ/profile-displayphoto-shrink_800_800/0/1686858115322?e=1695859200&v=beta&t=XNLtKcmNpPTDvprb5EYu3_doerWMjxuivl8ZUFaB5JA"
                    sx={{ width: 100, height: 100, margin: 'auto' }}
                    className="avatar"
                />
            </Box>
            <p className='text'>Rajesh Barmol</p>
        </Box>

        <List className='list'>
            <ListItemButton href="#home">
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
                <ListItemText primary={"Experince"} />
            </ListItemButton>
            <Divider className={'dividerColor'} />
            <ListItemButton href="#other">
                <ListItemIcon>
                    <DisplaySettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Other tech Stacks"} />
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
            <InstagramIcon />
            <LinkedInIcon />
            <FacebookIcon />
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
        >
            {NavBody}
        </SwipeableDrawer></>) : NavBody}
    </>
};

export default Navigation;

