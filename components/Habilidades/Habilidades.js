import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import CardTech from './CardTech'
import {technologies} from '../../data/technologies.js'

const styleFont = {
    fontFamily: ' sans-serif',
    fontWeight: 'bolder',
    background: 'linear-gradient(135deg,#993488,#5028ff)',
    WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text',
    fontWeight: '600'
}


const styleBtn = {
    border: '1px solid transparent',
    borderImage: 'linear-gradient(to bottom, #993488 0%, #5E30AF 100%) 1',
    transition: ' all 1.5s',
    '&:hover': {
        borderImage: 'linear-gradient(to top, #993488 0%, #5E30AF 100%) 1',
        boxShadow: '0px 0px 10px #5E30AF, 0px 0px 5px #5E30AF'
    }
}
const Habilidades = () => {


    return (

        <Box width='100%'  mt={12} height='min100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'  >

            <Typography sx={styleFont} id='skills' variant='h4'>
                TECNOLOGIAS
            </Typography>

            <Grid container mt={5} display='flex' alingItems='center' >

                {technologies.map((tech) => <CardTech key={tech.name} technologie={tech}></CardTech>
                )}

            </Grid>

            <Typography display='flex' justifyContent='center' alignItems='center' md={12} mt={5} sx={{ color: '#A0A0A0', letterSpacing: '1px' }} fontSize='1.2rem' variant='span'>
                <Box width='350px' p={1} display='flex' alignItems='center' justifyContent='center' sx={styleBtn}>
                    Y muchas mas en progreso....
                </Box>
            </Typography>


        </Box>

    )
}

export default Habilidades