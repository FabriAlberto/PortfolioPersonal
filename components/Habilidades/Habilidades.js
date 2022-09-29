import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import CardTech from './CardTech'

const styleFont = {
    fontFamily: ' sans-serif',
    fontWeight: 'bolder',
    background: 'linear-gradient(135deg,#993488,#5028ff)',
    WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text',
    fontWeight: '600'
}

const technologies = [
    { name: 'HTML', img: 'https://i.postimg.cc/yNbQmwwG/pngwing-com-6.png' },
    { name: 'CSS', img: 'https://i.postimg.cc/8c8Z3LkB/pngwing-com-5.png' },
    { name: 'Javascript', img: 'https://i.postimg.cc/pV8Gjck0/pngwing-com-4.png' },
    { name: 'Typescript', img: 'https://i.postimg.cc/L4BW70fJ/typescript.png' },
    { name: 'React', img: 'https://i.postimg.cc/MHy98Xvk/pngwing-com-1.png' },
    { name: 'MaterialUi', img: 'https://mui.com/static/logo.png' },
    { name: 'Bootstrap', img: 'https://i.postimg.cc/L84Nr9S7/pngwing-com-8.png' },
    { name: 'Sass', img: 'https://i.postimg.cc/sgnwzkD2/pngwing-com-7.png' },
    { name: 'Redux', img: 'https://i.postimg.cc/pT50qsvL/pngwing-com-2.png' },
    { name: 'Axios', img: 'https://axios-http.com/assets/logo.svg' },
    { name: 'Firebase', img: 'https://i.postimg.cc/xTDZFVcD/pngwing-com-10.png' },
    { name: 'Github', img: 'https://i.postimg.cc/Nf6z3CHy/pngwing-com-9.png' },
]
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

        <Box width='100%'  mt={3} height='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'  >

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