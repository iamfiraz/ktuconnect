import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

const Navbar = () => {
  return (

    <div className="navb">
      <AppBar position="static" sx={{ backgroundColor: 'rgb(5, 5, 52)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} className="appbar">
        <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
  <Typography
    variant="h6"
    sx={{
      color: '#FDF6EC',
      fontSize: '30px',
      fontFamily: '"Shadows Into Light", cursive',
      fontWeight: 400,
      fontStyle: 'normal',
      letterSpacing: '1px',
    }}
  >
    <p className='title'>
      K<big>tuc</big>onnect
    </p>
  </Typography>
</Link>

        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <Stack direction="row" spacing={2}>
          {/* <Link to="/l">
            <Button className="nav-btn">Login</Button>
          </Link>
          <Link to="/s">
            <Button className="nav-btn">Signup</Button>
          </Link> */}
          <Link to="/a">
            <Button className="nav-btn">About</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
    </div >
      )
    }

export default Navbar