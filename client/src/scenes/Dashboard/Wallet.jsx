import { Box, Button, Grid2, IconButton, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import data from 'data/data.json';
import Dinero from 'dinero.js';
import { shades } from 'theme';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Wallet = () => {
  const user = data.user;
  const amount = Dinero({ amount: user.walletBalance, currency: 'NGN' });
  const cards = '/assets/cards.png'; // Fixed typo in file extension

  // Define media query for medium screens
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        m: {
          xs: '10rem 1rem 0rem 10rem',   
          sm: '10rem 2rem 0rem 20rem',   
          md: '10rem 2rem 0rem 20rem',  
          lg: '10rem 12rem 0rem 20rem',  
          xl: '10rem 15rem 0rem 20rem',  
        }
      }}
    >
      <Grid2 container spacing={2} columns={12}>
        {/* Grid item 1 */}
        <Grid2 item xs={12} md={6} lg={6}>
          {/* Box 1 */}
          <Box
            display='flex'
            flexDirection={isMediumScreen ? 'column' : 'row'} // Change layout based on screen size
            alignItems='center'
            border={`1px solid ${shades.blue[200]}`}
            borderRadius='20px'
            justifyContent='space-between'
            p={2}
            mb={2}
            sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto' }}
          >
            <Box display='flex' flexDirection='column' marginRight={isMediumScreen ? 0 : 2}>
              <Typography sx={{ color: shades.blue[700] }}>Wallet Balance</Typography>
              <Typography sx={{ color: shades.blue[700] }} fontWeight='bold' variant='h6'>
                {amount.toFormat()}
              </Typography>
            </Box>
            <Button
              sx={{ backgroundColor: shades.blue[700], color: 'white', textTransform: 'capitalize', fontWeight: 'bold' }}
            >
              Fund Wallet
            </Button>
          </Box>

          {/* Box 2 */}
          <Box
            display='flex'
            flexDirection='column'
            border={`1px solid ${shades.blue[200]}`}
            borderRadius='20px'
            p={2}
            mb={2}
            sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto' }}
            justifyContent={isMediumScreen ? 'center' : 'flex-start'} 
            alignItems={isMediumScreen ? 'center' : 'flex-start'}
          >
            <Typography sx={{ color: shades.blue[700] }}>Referral</Typography>
            <Typography sx={{ color: shades.blue[700], fontWeight: 'bold' }}>Referral Code: {user.referralCode}</Typography>
            <Box display='flex' flexDirection={isMediumScreen ? 'column' : 'row'} marginTop={1}>
              <IconButton sx={{ color: shades.blue[500] }}>
                <ContentCopyOutlinedIcon />
                <Typography sx={{ fontSize: isMediumScreen ? '0.75rem' : '1rem', ml: 1 }}>Copy</Typography> 
              </IconButton>
              <IconButton sx={{ color: shades.blue[500] }}>
                <BorderColorOutlinedIcon />
                <Typography sx={{ fontSize: isMediumScreen ? '0.75rem' : '1rem', ml: 1 }}>Edit</Typography> 
              </IconButton>
              <IconButton sx={{ color: shades.blue[500] }}>
                <ShareOutlinedIcon />
                <Typography sx={{ fontSize: isMediumScreen ? '0.75rem' : '1rem', ml: 1 }}>Share</Typography> 
              </IconButton>
            </Box>
          </Box>

          {/* Box 3 */}
          <Box
            border={`1px solid ${shades.blue[200]}`}
            borderRadius='20px'
            p={2}
            sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto' }}
            justifyContent={isMediumScreen ? 'center' : 'flex-start'} 
            alignItems={isMediumScreen ? 'center' : 'flex-start'}
          >
            <Box display='flex' flexDirection={isMediumScreen ? 'column' : 'row'} justifyContent='space-between' mb={2}>
              <Box display='flex' flexDirection='column' mr={isMediumScreen ? 0 : 2} mb={isMediumScreen ? 2 : 0}>
                <Typography sx={{ color: shades.blue[700] }}>Total referrals made</Typography>
                <Typography sx={{ color: shades.blue[700] }}>{user.walletBonus}</Typography>
              </Box>
              <Box display='flex' flexDirection='column' ml={isMediumScreen ? 0 : 2}>
                <Typography sx={{ color: shades.blue[700] }}>Current Wallet Bonus</Typography>
                <Typography sx={{ color: shades.blue[700] }}>{user.walletBonus}</Typography>
              </Box>
            </Box>
            <IconButton sx={{ color: shades.blue[500] }}>
              <AccountBalanceWalletOutlinedIcon /> 
              <Typography sx={{ fontSize: isMediumScreen ? '0.75rem' : '1rem', ml: 1 }}>Cash Out</Typography> 
            </IconButton>
          </Box>
        </Grid2>

        {/* Grid item 2 */}
        <Grid2 item xs={12} md={6} lg={6}>
          <Box component='img' src={cards} alt='Cards' sx={{ width: {sm:'20rem',md:'30rem', lg:'40rem'}, height: 'auto', borderRadius: '5px' }} />
        </Grid2>
      </Grid2>
      </Box>
  );
};

export default Wallet;
