import { Box, Button, Divider, TextField, Typography, Checkbox, useMediaQuery, InputAdornment , IconButton} from '@mui/material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { shades } from 'theme';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Login = () => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const navigate = useNavigate();
  const login = '/assets/log-in.png'; 
  const googlelogo = '/assets/Google_logo.png';

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box display='flex' flexDirection={isLargeScreen ? 'row' : 'column'} backgroundColor={shades.grey[500]}>
      {isLargeScreen && (
        <Box
          component="img"
          src={login}
          alt='login'
          width="20%"
          height='100vh'
          flexGrow={0.5}
        />
      )}
      <Box display='flex' flexDirection='column'  m={isLargeScreen?'0 3rem':'2rem'}  width={isLargeScreen ? '60%' : '80%'} justifyContent='center' height='100vh' >
        <Box display='flex' justifyContent='space-between' width={isLargeScreen ? '60%' : '90%'} m='0.5rem 3rem' >
          <Link to="/" style={{ color: shades.blue[300], textDecoration: 'none' }} >
            <Box display='flex' alignItems="center">
              <ChevronLeftIcon /> <Typography>Home</Typography>
            </Box>
          </Link>
          <Button sx={{ backgroundColor: shades.blue[300], color: shades.grey[100], textTransform: 'lowercase' }} onClick = {() => navigate('/404')}>
            signup
          </Button>
        </Box>
        <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width={isLargeScreen ? '60%' : '90%'} 
        m={isLargeScreen ? '0 3rem' : '0 1.5rem'} 
        borderRadius='5px'
        p={3} 
      >
        <Typography variant="h5" mb={2}>Login</Typography>
        <Button 
          variant="outlined" 
          startIcon={<img src={googlelogo} alt='Google Logo' style={{width:'20px', height:'20px'}} />}
          sx={{ mt: 2, textTransform: 'lowercase', backgroundColor: shades.grey[100], borderColor:shades.grey[100],color: 'black', width: '80%' }}
          onClick = {() => navigate('/504')}
        >
          login with google
        </Button>
        <Divider sx={{ width: '80%', my: 2 }}>Or continue with</Divider>
        <Box
          sx={{ width: '80%' }} 
          backgroundColor={shades.grey[100]} 
          borderRadius='5px'
          p={2} 
        >
          <form style={{ width: '100%' }}>
            <Typography>Email Address</Typography>
            <TextField fullWidth margin="normal" />
            <Typography>Password</Typography>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box display='flex' justifyContent='space-between' mt={2} mb={2} alignItems="center">
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography>Remember me</Typography>
              </Box>
              <Link to="/recover-password" style={{ color: 'red', textDecoration: 'none' }}>
                Recover Password
              </Link>
            </Box>
            <Button 
              fullWidth 
              sx={{ backgroundColor: shades.blue[300], color: shades.grey[100], mt: 2, textTransform: 'lowercase' }} 
              type="submit"
              onClick = {() => navigate('/Dashboard')}
            >
              log in
            </Button>
          </form>
        </Box>
      </Box>

      </Box>
    </Box>
  );
};

export default Login;
