import React from 'react'
import { Grid ,Typography,Button,Link} from '@mui/material'

import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
const Main = () => {
   
    const styleFont={
      fontFamily:' sans-serif',fontWeight:'bolder',
      background: 'linear-gradient(139deg,#993488,#5E30AF)',
      WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text',
      fontWeight:'600'
    }
    const styledBtnDowloading={
      border:'1px solid #8B3491',
      color:'#A0A0A0',
      '&:hover':{
        background:'linear-gradient(139deg,#993488,#5E30AF)',
        color:'#fff',
        transform:'scale(.95)'
      }
    }

  return (
   <Grid  container display='flex' alignItems='center' mt={12} sx={{minHeigt:'100vh'}}>
      
       <Grid item md={6} display='flex' flexDirection='column' justifyContent='center'>
       <Typography variant='h2' color='#A0A0A0'>
        Fabricio ⌨
       </Typography>
       <Typography variant='h5' color='#A0A0A0' sx={styleFont} >
        DESARROLLADOR FRONTEND
       </Typography>
       <Typography color='#A0A0A0' sx={{letterSpacing:'1px'}} mt={2}>
        ¡Hola! Soy desarrollador Frontend. Soy una persona a la que le gusta 
        desarrollarse día a día, siempre estoy tratando de aprender cosas nuevas para 
        poder seguir creciendo y poder enseñar todo lo aprendido. ¡Tengo muchísimas ganas
        de poder desafiar mis habilidades y seguir aprendiendo de todo lo lindo que tiene este mundo!.
       </Typography>
       </Grid>
       <Grid item md={6} display='flex' alignItems='center' justifyContent='center'>
         <img className='imgStyled' src='https://maxcode.vercel.app/static/media/header-img.fe6abadd0a518fd15552f72ba14ef5af.svg' alt='img-astronauta'/>
        </Grid>
        <Grid md={12}>
         <Link sx={{textDecoration:'none'}} href='https://drive.google.com/file/d/1GLNALJKchgZzmrLkqMikXWjJJGue4YFX/view?usp=sharing'  target="_blank" rel="noopener"> 
         <Button sx={{ ...styledBtnDowloading, transition:'.7s'}}> <ArrowCircleDownRoundedIcon /> Descargar CV </Button>
         </Link>
        </Grid>

   </Grid>
  )
}

export default Main