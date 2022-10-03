import React from 'react'
import Image from 'next/image'
import Form from './Form'
import { Avatar, Grid, Typography, Box, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../fontGradient.module.css'
const Contact = () => {

    const styleFont = {
        fontFamily: ' sans-serif',
        fontWeight: 'bolder',
        background: 'linear-gradient(135deg,#993488,#5028ff)',
        WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text',
        fontWeight: '600'
    }
    return (
        <>
            <Grid id='contact' sx={{ marginBottom: '20px' }} p={9} container mt={12} md={12} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Typography variant='h4' className={styles.gradientFont}>
                    CONTACTAME
                </Typography>
                <Grid container display='flex' alignItems='center' md={12} mt={13} justifyContent='center' flexWrap='wrap'>


                    <Grid item md={6} sm={12} xs={12} display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
                        <Avatar
                            alt="FabricioAlberto"
                            src="https://i.postimg.cc/RFzbSr5k/Whats-App-Image-2022-05-16-at-6-59-44-PM.jpg"
                            sx={{ width: 150, height: 150, boxShadow: '0px 0px 10px #5028ff' }}
                        />
                        <Typography mt={2} color='#A0A0A0'>
                            FABRICIO HUGO ALBERTO
                        </Typography>
                        <Box height={50} mt={5}>
                            <Link href='https://www.linkedin.com/in/fabricio-alberto-597b17220/' target="_blank" rel="noreferrer noopener " m={2}>
                                <GitHubIcon sx={{ color: '#5E30AF' }} />
                            </Link>
                            <Link href='https://github.com/FabriAlberto' target="_blank" rel="noreferrer noopener " m={2}>
                                <LinkedInIcon sx={{ color: '#5E30AF' }} />
                            </Link>

                        </Box>

                    </Grid> 
                    <Grid  item md={6} sm={12} xs={12} display='flex' flexDirection='column' alignItems='center' justifyContent='center' >

                        <Form />
                    </Grid>
                </Grid>


            </Grid>



        </>
    )
}

export default Contact