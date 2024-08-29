import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import { shades } from 'theme';

export const Error504 = () => {
  const errorImage = '/assets/504.png';
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
          width: '30rem'
        }}
      >
        <Box
          component="img"
          src={errorImage}
          alt="504 Error"
          sx={{
            maxWidth: '100%',
            maxHeight: '400px',
            objectFit: 'contain',
          }}
        />
        <Typography variant="h4" sx={{ fontSize: '4rem', fontWeight: 'bold', color: shades.blue[700], marginBottom: '2rem' }}>
          Gateway Timeout
        </Typography>
        
        <Typography variant="body1" sx={{ color: shades.blue[300], marginBottom: '2rem' }}>
          The server took too long to respond. Please try again later.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: shades.blue[700], // Use the sx prop for custom color
            color: shades.grey[100],           // Ensure the text color is readable
            padding: '0.5rem 2rem',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: shades.blue[500], // Darker shade on hover if needed
            },
          }}
          href="/"
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default Error504;