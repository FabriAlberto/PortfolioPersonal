import React from 'react';

import Typography from '@mui/material/Typography';

import { Container, Link, Grid, } from '@mui/material'
 
 const styleLink={
   textDecoration:'none',
   color:'#A0A0A0',
   fontFamily:' sans-serif',
   transition:'.3s',
   '&:hover':{
    color:'#fff'
   }
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

      <Grid container  md={12} sx={{ height: '100px'}} 
      display='flex'>
        <Grid item md={6} display='flex' alignItems='center' >
          <Typography  variant="h2" component="h2" color='#fff' sx={styleFont}>
            FDEV
          </Typography>
        </Grid>

        <Grid item  md={6} display='flex' alignItems='center' justifyContent='space-around' >
          <Link href='#init' sx={styleLink}> Inicio </Link>
          <Link href='#skills' sx={styleLink}> Habilidades</Link>
          <Link href='#projects' sx={styleLink}> Proyectos </Link>
          <Link borderBottom='2px solid red' href='#contact' sx={{ ...styleLink,borderImage: 'linear-gradient(to right, #993488 0%, #5E30AF 100%) 1'}}> Contactame </Link>
        </Grid>
      </Grid>
{/* border: '1px solid transparent',
    borderImage: 'linear-gradient(to bottom, #993488 0%, #5E30AF 100%) 1', */}
    </>
  )
}

export default Navbar

