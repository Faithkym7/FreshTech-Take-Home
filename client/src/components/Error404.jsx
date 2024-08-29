import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import { shades } from 'theme';

const Error404 = () => {
  const errorImage = '/assets/404.png'
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: shades.grey[100],
        padding: '2rem',
      }}
    >
        <Box
            sx={{
                 width:'30rem'
                }}
        >
            
            <Box
                component="img"
                src={errorImage}
                alt="404 Error"
                sx={{
                maxWidth: '100%',
                maxHeight: '400px',
                objectFit: 'contain',
               
                }}
            />
            <Typography variant="h1" sx={{ fontWeight: 'bold', color: shades.blue[700],  marginBottom: '2rem',}}>
                Oops!
            </Typography>            
            <Typography variant="body1" sx={{ color:shades.blue[300], marginBottom: '2rem' }}>
                We are very sorry for inconvenience. It looks like you’re try to access a page that either has been deleted or never existed.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                href="/"
                sx={{
                padding: '0.5rem 2rem',
                textTransform: 'none',
                }}
            >
                Go Back
            </Button> 
        </Box>    
    </Box>
  );
};

export default Error404;