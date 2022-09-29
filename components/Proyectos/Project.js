import { Grid, Card, CardContent, Button, Typography, Link } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const Project = ({ project }) => {


    const styleImg = {
        width: '300px',
        heigth: '100%',
        objectFit: 'contain'
    }
    const styleIcon = {
        color: '#5028ff '
    }

    return (
        <>
            <Card
                item
                sx={{ height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 330, margin: '10px', backgroundColor: '#121214' }} >
                <Box height='60%' p={1.5} >
                    <img style={styleImg} src={project.img} alt={project.name} />

                </Box>

                <Box height='30%' width='90%' >

                    {project.technologies.map((tech) => {
                        return (
                            <Button sx={{ color: '#A0A0A0' }} variant='span'> {tech}</Button>
                        )

                    })}
                </Box>
                <Box height='10%' width='90%'>
                    {
                        project.deploy !== "" ? <Link href={project.deploy} target="_blank" rel="noreferrer noopener">
                            <RocketLaunchIcon sx={styleIcon} />
                        </Link>
                            :
                            <Link target="_blank" rel="noreferrer noopener">
                                <RocketLaunchIcon sx={{color:'#A0A0A0'}} />
                            </Link>
                    }


                    <Link href={project.github} m={1} target="_blank" rel="noreferrer noopener " >
                        <GitHubIcon sx={styleIcon} />
                    </Link>
                </Box>


            </Card>

        </>
    )
}

export default Project