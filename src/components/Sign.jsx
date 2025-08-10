import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './sign.css'; // import the CSS file

const Sign = () => {
  return (
    <Box className="signup-container">
      <Box className="signup-form">
        <Typography variant="h4" className="signup-title">SIGN UP</Typography>
        
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Age" type="number" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Phone Number" type="tel" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
        
        <Button variant="contained" color="primary" fullWidth className="signup-button">
          Create Account
        </Button>
      </Box>
    </Box>
  );
  
}

export default Sign