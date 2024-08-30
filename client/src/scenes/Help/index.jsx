import { Box, Grid2, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { shades } from 'theme';

const Help = () => {
  const cardData = [
    {
      id: 1,
      type: "Frequently Asked Questions",
      description: "See FAQ",
      icon: <QuizOutlinedIcon sx={{fontSize:'2rem'}} />,
      shade: '#EE5D50'
    },
    {
      id: 2,
      type: "Whatsapp",
      description: "Drop a message",
      icon: <QuestionAnswerOutlinedIcon sx={{fontSize:'2rem'}}  />,
      shade: '#2DAE32'
    },
    {
      id: 3,
      type: "Report Our Support",
      description: "Not Satisfied?",
      icon: <ErrorOutlineOutlinedIcon sx={{fontSize:'2rem'}} />,
      shade: '#EE5D50'
    },
    {
      id: 4,
      type: "Live Chat",
      description: "Chat Now",
      icon: <QuestionAnswerOutlinedIcon sx={{fontSize:'2rem'}} />,
      shade: '#FFB547'
    },
    {
      id: 5,
      type: "Phone Call",
      description: "Call Us",
      icon: <WifiCalling3OutlinedIcon sx={{fontSize:'2rem'}} />,
      shade: '#4169E1'
    },
    {
      id: 6,
      type: "Review Our App",
      description: "Coming Soon",
      icon: <StarBorderOutlinedIcon sx={{fontSize:'2rem'}} />,
      shade: '#2DAE32'
    }
  ];

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
      <Grid2 container spacing={3}>
        {cardData.map((service) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            key={service.id}
            display="flex"
            justifyContent="center"
          >
            <Paper
              elevation={3}
              sx={{
                padding: '1rem',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                border: `1px solid ${shades.blue[200]}`,
                backgroundColor: shades.grey[100],
                width: '30rem',
                maxWidth: '30rem',
                height: '10rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: '2rem',
                borderRadius: '30px',
              }}
            >
              {/* TODO:change onhover to have the same settings */}
              <IconButton
                sx={{
                  borderRadius: '30%',
                  backgroundColor: service.shade,
                  color: 'white',
                  width: 100,
                  height: 100,
                  mb: 2,
                  mr: 2,
                }}
              >
                {service.icon}
              </IconButton>
              <Box display="flex" flexDirection="column" width='20rem'>
                <Typography color={shades.grey[800]} sx={{ fontWeight: 'bold', fontSize:'1rem', mb: 1 }}>
                  {service.type}
                </Typography>
                <Box display="flex" flexDirection="row" alignItems='center'>                  
                  <Typography color={shades.blue[600]} mr={2} sx={{ fontWeight: 'bold', fontSize:'1rem',}}>
                    {service.description}
                  </Typography>
                  {service.id !== 6 && (<IconButton
                    sx={{
                      color: shades.blue[600]
                    }}
                  >
                    <EastOutlinedIcon/>
                  </IconButton>)}
                </Box>                
              </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Help;
