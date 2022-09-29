import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link, Grid, } from '@mui/material'
 
 const styleLink={
   textDecoration:'none',
   color:'#fff'
 }
 const styleFont={
  fontFamily:' sans-serif',fontWeight:'bolder',
  background: 'linear-gradient(139deg,#8B3491,#5E30AF)',
  WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text',
  fontWeight:'600'
}

const Navbar = () => {

  return (
    <>

      <Grid container sx={{ height: '100px'/* border: '1px solid red ' */}} 
      display='flex'>
        <Grid item md={6} display='flex' alignItems='center' >
          <Typography  variant="h2" component="h2" color='#fff' sx={styleFont}>
            FDEV
          </Typography>
        </Grid>

        <Grid item  md={6} display='flex' alignItems='center' justifyContent='space-around' >
          <Link sx={styleLink}> Inicio </Link>
          <Link sx={styleLink}> Habilidades</Link>
          <Link sx={styleLink}> Proyectos </Link>
          <Link sx={styleLink}> Contactame </Link>
        </Grid>
      </Grid>

    </>
  )
}

export default Navbar

