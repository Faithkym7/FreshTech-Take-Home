import React, { useState } from 'react';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography, styled, useTheme, Drawer as MuiDrawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Dashboard as DashboardIcon, Logout as LogoutIcon, Wifi as WifiIcon, LocalPhone as LocalPhoneIcon, Tv as TvIcon, Bolt as BoltIcon, Loop as LoopIcon, Receipt as ReceiptIcon, SupportAgent as SupportAgentIcon, NotificationsRounded as NotificationsRoundedIcon, KeyboardArrowRight as KeyboardArrowRightIcon } from '@mui/icons-material';
import { shades } from 'theme';
import { Link, useLocation } from 'react-router-dom';
import data from 'data/data.json';

const drawerWidth = '17rem';
const logo = '/logo2.png';

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: shades.blue[100]
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor: shades.blue[100]
      },
    }),
  }),
);

const Appbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const user = data.user;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const location = useLocation();

  let headerContent;
  switch (location.pathname) {
    case '/Dashboard':
      headerContent = `Welcome, ${user.name}`;
      break;
    case '/Airtime-to-Cash':
      headerContent = 'Airtime to Cash';
      break;
    case '/Transaction-History':
      headerContent = 'Transaction History';
      break;
    case '/Help&Support':
      headerContent = 'Help & Support';
      break;
    default:
      headerContent = '';
  }
  return (
    <Box display="flex">
      <AppBar position="fixed" sx={{ backgroundColor: shades.grey[100], color: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>          
          <Drawer variant="permanent" open={open} >
            <DrawerHeader>
              <Box display="flex" alignItems="center">
                {open && (
                  <>
                    <img src={logo} alt="Company Logo" style={{ height: '40px', marginRight: '10px' }} />
                    <Typography variant="h6" color={shades.blue[700]} fontWeight='bold'>subssum</Typography>
                  </>
                )}
              </Box>
              <IconButton onClick={toggleDrawer}>
              {open ? (
                
                <ChevronLeftIcon />
              ) : (
                <>
                  <img
                    src={logo}
                    alt="Company Logo"
                    style={{ height: '40px', marginRight: '10px' }}
                  />
                  <ChevronRightIcon />
                </>
                
              )}
            </IconButton>

            </DrawerHeader>           
            <List>
              {[
                { text: 'Dashboard', icon: <DashboardIcon /> , path:"/Dashboard"},
                { text: 'Buy Airtime', icon: <LocalPhoneIcon />, path:"/404" },
                { text: 'Buy Data', icon: <WifiIcon /> , path:"/404"},
                { text: 'TV Subscription', icon: <TvIcon /> , path:"/404"},
                { text: 'Pay Electrical Bill', icon: <BoltIcon /> , path:"/404"},
                { text: 'Airtime to Cash', icon: <LoopIcon />, path:"/Airtime-to-Cash" },
                { text: 'Transaction History', icon: <ReceiptIcon /> , path:"/Transaction-History"},
                { text: 'Help & Support', icon: <SupportAgentIcon /> , path:"/Help&Support" },                
              ].map((item, index) => (
                <ListItem key={item.text}  sx={{ display: 'block' }}>
                  <ListItemButton
                    component={Link}
                    to = {item.path}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      backgroundColor: selectedIndex === index ? shades.blue[700] : 'transparent',
                      borderRadius: selectedIndex === index? '5px' : '0',
                      '&:hover': {
                        backgroundColor: shades.blue[300],
                        color: shades.grey[100],
                      }
                    }}
                    onClick={() => handleListItemClick(index)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: selectedIndex === index ? 'white': shades.grey[800]
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 , color: selectedIndex === index ? 'white': shades.grey[800]}} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
           
            <List sx={{mt:10}}>
              <ListItem  sx={{ display: 'block' }}>
                <ListItemButton
                  component={Link}
                  to = "/"
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: shades.grey[800]
                    }}
                  >
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 , color: shades.grey[800] }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Box sx={{ flexGrow: 1 }}>
            <Typography  sx={{fontWeight:'bold'}}>{headerContent}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ marginRight: 2 , color: shades.blue[400], fontWeight:'bold'}}>Upgrade To Merchant</Typography>
            <IconButton
              sx={{ 
                borderRadius: '50%', 
                border: `2px solid ${shades.blue[700]}` ,
                width:40,
                height: 40
              }}
             >
              <NotificationsRoundedIcon />
              {user.notifications.length > 0 && (
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bgcolor: shades.blue[700],
                    color: 'white',
                    borderRadius: '50%',
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                  }}
                >
                  {user.notifications.length}
                </Box>
              )}
            </IconButton>
            <IconButton
              sx={{ 
                borderRadius: '50%', 
                border: `2px solid ${shades.blue[700]}`,
                ml: 1,
                width:40,
                height: 40
              }}
            >
              <Avatar src={user.profileImage} alt={user.name} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
