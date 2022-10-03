import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Project from './Project'
import { projects } from '../../data/projects'
 const styleFont={
    fontFamily:' sans-serif',
    fontWeight:'bolder',
    background: 'linear-gradient(135deg,#993488,#5028ff)',
    WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text',
    fontWeight:'600'
  }


const Proyectos = () => {
  return (

    <>
    <Box
     mt={8} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Typography id='projects' variant='h4' sx={styleFont}>
        PROYECTOS
        </Typography>
        <Grid container display='flex' mt={5}  alignItems='center' justifyContent='center'>
            {projects.map((project)=><Project key={project.name} project={project}></Project>)}
        </Grid>
    </Box>
    
    </>
  )
}

export default Proyectos