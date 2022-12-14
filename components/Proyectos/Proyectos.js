import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Project from './Project'
import styles from '../../styles/fontGradient.module.css'

const projects=[
  { name:'sportCenter', img:'https://i.postimg.cc/vmJMyW92/sportcenter.png',github:'https://github.com/FabriAlberto/Ecommerce-reactJS',deploy:'https://sportcenter.vercel.app/',technologies:['React','Context','Bootstrap','Router','Firestore','Formik']},
  { name:'Wallet', img:'https://i.postimg.cc/JnXrHTMW/wallet.png',github:'https://github.com/FabriAlberto/jv-script',deploy:'https://fabrialberto.github.io/jv-script/',technologies:['HTML','CSS','Javascript','Bootstrap','APi','SweetAlert','Toastify',] },
  { name:'ModuloPhone', img:'https://i.postimg.cc/SxKmfQkd/modulophone.png',github:'https://github.com/FabriAlberto/Modulo-Phone-FabriAlberto',deploy:'https://modulophone.netlify.app/' ,technologies:['HTML','CSS','Bootstrap','Sass',]  },
  { name:'ChallengeAlkemy', img:'https://i.postimg.cc/pX5SPSQ2/alkemychallenge.png',github:'https://github.com/FabriAlberto/Challenge-Movies',deploy:'',technologies:['React','Context','Bootstrap','Router','SweetAlert']},
  { name:'ChallengeAerolab', img:'https://i.postimg.cc/xT2CMSXp/aerloab.png',github:'https://github.com/FabriAlberto/Aerolab-Challenge',deploy:'https://aerolabchallenge-sigma.vercel.app',technologies:['React','Context','Bootstrap','Router',"SweetAlert"]},
  { name:'Portfolio', img:'https://i.postimg.cc/kgrpGywW/portfolio.png',github:'https://github.com/FabriAlberto/PortfolioPersonal',deploy:'',technologies:['React','NextJs','MaterialUi','Formik']} ,
  { name:'API-CRUD', img:'https://www.sololearn.com/Uploads/what_is_crud_2.jpg',github:'https://github.com/FabriAlberto/API-REST-CRUD',deploy:'',technologies:['NodeJs','Express','MongoDb']} ,
]


const Proyectos = () => {
  return (

    <>
    <Box
     mt={8} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Typography id='projects' variant='h4' className={styles.gradientFont} sx={{fontWeight:'600'}}>
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