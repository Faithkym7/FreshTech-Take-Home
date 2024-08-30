import { Avatar, Box, Button, Grid2, IconButton, Tab, Tabs, TextField, Typography } from '@mui/material';
import React , {useState} from 'react';
import { shades } from 'theme';
import data from 'data/data.json';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = data.user;
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        m: {
          xs: '5rem 1rem 0rem 10rem',   
          sm: '5rem 2rem 0rem 20rem',   
          md: '5rem 2rem 0rem 20rem',  
          lg: '5rem 12rem 0rem 20rem',  
          xl: '5rem 15rem 0rem 20rem',  
        }
      }}
    >
      <Grid2 container spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        <Grid2 item xs={12} md={6}>
          {/* Profile Image and Upload */}
          <Box
            border={`1px solid ${shades.blue[200]}`}
            borderRadius='20px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            p={2}
            mb={2}
            sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto' }}
          >
            <Avatar sx={{ width: 200, height: 200 }} />
            <Box ml={2}>
              <IconButton>
                <Typography>Upload Image</Typography>
              </IconButton>
            </Box>
          </Box>

          {/* Profile Details */}
          <Box
            border={`1px solid ${shades.blue[200]}`}
            borderRadius='20px'
            p={2}
            mb={2}
            sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto' }}
          >
            <Box display='flex' flexDirection='row' justifyContent='space-between' mb={1}>
              <Typography>Name</Typography>
              <Typography>{user.name}</Typography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' mb={1}>
              <Typography>Email</Typography>
              <Typography>{user.email}</Typography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' mb={1}>
              <Typography>Phone Number</Typography>
              <Typography>{user.phone}</Typography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' mb={1}>
              <Typography>Account Status</Typography>
              <Typography>{user.accountStatus}</Typography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' mb={1}>
              <Typography>Referral Link</Typography>
              <Typography>{user.referralLink}</Typography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='flex-end'>
              <IconButton sx={{ color: shades.blue[500] }}>
                <ContentCopyOutlinedIcon />
                <Typography ml={1}>Copy</Typography>
              </IconButton>
            </Box>
            <Link to="/404" style={{ color: shades.blue[400], textDecoration: 'none' }} >
             <Typography>Edit Details</Typography>            
          </Link>
          </Box>
        </Grid2>
        {/* Placeholder for second grid item, or remove if not needed */}
        <Grid2 item xs={12} md={6}>
        <Box
            border={`1px solid ${shades.blue[200]}`}
            borderRadius='60px'
            p={2}
            mb={2}
            sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto' }}
          >
            <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            TabIndicatorProps={{
                sx: {
                display: 'none', 
                },
            }}
            >
            <Tab
                label="Change Password"
                sx={{
                borderRadius: '60px',
                textTransform: 'capitalize',
                fontWeight: selectedTab === 0 ? 'bold' : 'normal',
                backgroundColor: selectedTab === 0 ? shades.grey[600] : 'transparent',
                color: selectedTab === 0 ? 'black' : 'black',
                }}
            />
            <Tab
                label="Change Pin"
                sx={{
                borderRadius: '60px',
                textTransform: 'capitalize',
                fontWeight: selectedTab === 1 ? 'bold' : 'normal',
                backgroundColor: selectedTab === 1 ? shades.grey[600] : 'transparent',
                color: selectedTab === 1 ? 'black' : 'black',
                }}
            />
            </Tabs>
        </Box>
        <Box
            border={`1px solid ${shades.blue[200]}`}
            borderRadius='20px'
            p={2}
            mb={2}
            sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto' }}
          >
            {selectedTab === 0 && (
          <Box>
           <Typography sx={{color:shades.grey[700]}}>Current Password</Typography>
            <TextField
              label="Current Password"
              type="password"
              fullWidth
              sx={{ mb: 2 , mt:1}}
            />
            <Typography sx={{color:shades.grey[700]}}>New Password</Typography>
            <TextField
              label="New Password"
              type="password"
              fullWidth
              sx={{ mb: 2 , mt:1}}
            />
            <Typography sx={{color:shades.grey[700]}}>Confirm New Password</Typography>
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              sx={{ mb: 2, mt:1 }}
            />
            <Button
              variant="contained"
              sx={{ borderRadius:'10px', backgroundColor: shades.blue[700], color: 'white', textTransform: 'capitalize', fontWeight: 'bold' }}
              fullWidth
            >
              Update Password
            </Button>
          </Box>
        )}
        {selectedTab === 1 && (
          <Box>
            <Typography sx={{color:shades.grey[700]}}>Current Pin</Typography>
            <TextField
              label="Current Pin"
              type="password"
              fullWidth
              sx={{ mb: 2 , mt:1}}
            />
            <Typography sx={{color:shades.grey[700]}}>New Pin</Typography>
            <TextField
              label="New Pin"
              type="password"
              fullWidth
              sx={{ mb: 2 , mt:1}}
            />
            <Typography sx={{color:shades.grey[700]}}>Confirm New Pin</Typography>
            <TextField
              label="Confirm New Pin"
              type="password"
              fullWidth
              sx={{ mb: 2 , mt:1}}
            />
            <Button
              variant="contained"
              sx={{ borderRadius:'10px',backgroundColor: shades.blue[700], color: 'white', textTransform: 'capitalize', fontWeight: 'bold' }}
              fullWidth
            >
              Update Pin
            </Button>
            </Box>
        )}
        </Box>
        </Grid2>
      </Grid2>
      </Box>
  );
};

export default Profile;
