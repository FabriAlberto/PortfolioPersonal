import { Grid, Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const Project = ({ project }) => {


    const styleImg = {
        width: '300px',
        heigth: '100px',
        objectFit:'contain'
    }

    return (
        <>
            <Grid item>
                <Card sx={{ minWidth: 275 , margin:'25px' ,background:'linear-gradient(135deg,#993488,#5028ff)'}} md={4} >
                    <CardContent>
                        <img style={styleImg} src={project.img}  alt={project.name}/>
                    </CardContent>
                </Card>

            </Grid>

        </>
    )
}

export default Project