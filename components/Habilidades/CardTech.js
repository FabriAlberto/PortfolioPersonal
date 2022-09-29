import React from 'react'
import { Grid } from '@mui/material'
import { height } from '@mui/system'

const CardTech = ({ technologie }) => {
    const { name,img } = technologie
    const styleImg={
      
      width:'80px',
      height:'90px',
      objectFit:'contain',
    /*   filter:'drop-shadow(0px 0px 3px #993488)' */
    }
    return (
        <>
            <Grid display='flex' alignItems='center' justifyContent='center' mt={7} item md={2}>
                <img  style={styleImg} src={img} alt={name} />
            </Grid>

        </>
    )
}

export default CardTech
