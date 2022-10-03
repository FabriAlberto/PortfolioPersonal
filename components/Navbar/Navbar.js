import React from 'react';
import Typography from '@mui/material/Typography';
import { Link, Grid, Box } from '@mui/material'
import style from '../../styles/navbar.module.css'
import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StyleIcon from '@mui/icons-material/Style';

const styleLink = {
  textDecoration: 'none',
  color: '#A0A0A0',
  fontFamily: ' sans-serif',
  transition: '.3s',
  '&:hover': {
    color: '#fff'
  }
}

const styleFont = {
  fontFamily: ' sans-serif', fontWeight: 'bolder',
  background: 'linear-gradient(139deg,#8B3491,#5E30AF)',
  WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text',
  fontWeight: '600'
}

const Navbar = () => {

  return (
    <>

      <Grid id='init' p={3} container md={12} sx={{ height: '100px' }}
        display='flex'>
        <Grid item md={6} display='flex' alignItems='center' >
          <Typography variant="h2" component="h2" color='#fff' sx={styleFont}>
            FDEV
          </Typography>
        </Grid>

        <Grid className={style.navbarRoutes} item md={6} display='flex' alignItems='center' justifyContent='space-around' >
          <Link href='#init' sx={styleLink}> Inicio </Link>
          <Link href='#skills' sx={styleLink}> Habilidades</Link>
          <Link href='#projects' sx={styleLink}> Proyectos </Link>
          <Link href='#contact' borderBottom='2px solid red' sx={{ ...styleLink, borderImage: 'linear-gradient(to right, #993488 0%, #5E30AF 100%) 1' }}> Contactame </Link>
        </Grid>
      </Grid>

      <Box className={style.navbarResponsive}>
        <Link href='#init' className={style.styleLinkResponsive}  m={2}>
          <PersonIcon className={style.styleIconResponsive} />
        </Link>
        <Link href='#skills' className={style.styleLinkResponsive} m={2}>
          <ConstructionIcon className={style.styleIconResponsive} />
        </Link>
        <Link href='#projects' className={style.styleLinkResponsive} m={2} >
          <StyleIcon className={style.styleIconResponsive} />
        </Link>
        <Link href='#contact' className={style.styleLinkResponsive} m={2}>
          <ContactMailIcon className={style.styleIconResponsive} />
        </Link>
      </Box>

    </>
  )
}

export default Navbar

