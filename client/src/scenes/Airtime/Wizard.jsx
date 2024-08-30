import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Card, CardContent, Tabs, Tab, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { shades } from 'theme';


const steps = ['Fill Info', 'Make Payment', 'View Receipt'];

const WizardWithTabs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    network: '',
    phoneNumber: '',
    amount: '',
    pin: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const handleChange = (event, newValue) => {
    setActiveStep(newValue);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{
        p: {
          xs: '1rem',  
          sm: '1.5rem',  
          md: '2rem',  
          lg: '2.5rem 10rem',  
          xl: '3rem 10rem'   
        }
      }}>
      {/* Tabs */}
      <Tabs
        value={activeStep}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        sx={{ borderBottom: `1px solid ${shades.blue[700]}` }} 
      >
        {steps.map((step, index) => (
          <Tab key={index} label={step} />
        ))}
      </Tabs>

      {/* Tab Content */}
      <Box mt={2} sx={{ borderRadius: '4px', border: `1px solid ${shades.blue[700]}`, backgroundColor: shades.blue[100], p: 3 }}>
        {activeStep === 0 && (
          <Box>
            <Typography textAlign='center' color={shades.blue[600]} variant="h6" sx={{ mb: 2 }}>
              Airtime to Cash
            </Typography>
            <FormControl fullWidth sx={{ mb: 2, color: shades.blue[600] }}>
              <InputLabel >Select Network</InputLabel>
              <Select
                name="network"
                value={formData.network}
                onChange={handleInputChange}
                label="Select Network"
                sx={{ backgroundColor: 'white' }} 
              >
                <MenuItem value="mtn">MTN</MenuItem>
                <MenuItem value="airtel">Airtel</MenuItem>
                <MenuItem value="etisalat">Etisalat</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Airtime Share PIN"
              name="pin"
              value={formData.pin}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>
        )}
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Make Payment
            </Typography>
            <TextField
              label="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Card Expiry Date"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Card CVC"
              name="cardCvc"
              value={formData.cardCvc}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>
        )}
        {activeStep === 2 && (
          <Box>
            
            <Card variant="outlined" sx={{backgroundColor:shades.blue[100]}}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Transaction Details
                </Typography>
                <Typography><strong>Network:</strong> {formData.network}</Typography>
                <Typography><strong>Phone Number:</strong> {formData.phoneNumber}</Typography>
                <Typography><strong>Amount:</strong> {formData.amount}</Typography>
                <Typography><strong>Airtime Share PIN:</strong> {formData.pin}</Typography>
                <Typography><strong>Card Number:</strong> {formData.cardNumber}</Typography>
                <Typography><strong>Card Expiry:</strong> {formData.cardExpiry}</Typography>
              </CardContent>
            </Card>
          </Box>
        )}
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button onClick={handleBack} disabled={activeStep === 0} sx={{ mr: 2 }}>
            Back
          </Button>
          <Button
            onClick={handleNext}
            variant="contained"
            disabled={activeStep === steps.length - 1 && !formData.cardNumber} 
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Proceed'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WizardWithTabs;
