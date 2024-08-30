import React from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Box,Grid2, IconButton, Typography } from '@mui/material';

const ImageIconSlider = () => {
  const mtn = '/assets/mtn-logo.png';
  const airtel = '/assets/airtel-logo.png';
  const etisalat = '/assets/etisalat-icon.png';

  const more = (
    <IconButton sx={{ width: 'auto', height: 'auto' }}>
      <Typography variant="body2">More</Typography>
      <ChevronRightOutlinedIcon />
    </IconButton>
  );

  const gridObjects = [mtn, airtel, etisalat, more];

  return (
    <Box m="0.5rem">
      <Grid2 container spacing={1}>
        {gridObjects.map((item, index) => (
          <Grid2 item xs={1} sm={3} md={2} key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {typeof item === 'string' ? (
              <img src={item} alt={`logo-${index}`} style={{ maxWidth: '40px', height: '40px' }} />
            ) : (
              item
            )}
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ImageIconSlider;
