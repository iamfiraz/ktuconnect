import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './login.css';
const Login = () => {
  return (
    
    
  
    <div className='login-container'>
      <h1>LOGIN</h1>
        <TextField className="login-input" label="Username" variant="outlined" fullWidth margin='normal' />
        <TextField  label="Password" variant="outlined" className="login-input" fullWidth margin='normal'/>
        <Button variant="contained" className='login-button' fullWidth margin='normal'>Login</Button>
    </div>
  )
}

export default Login
       
 