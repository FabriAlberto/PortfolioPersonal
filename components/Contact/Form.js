import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const Form = () => {
    return (
        <>
            <Box
              /*   oxnSubmit={handleSubmit} */
                p={4}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    backgroundColor: '#121214',
                    borderRadius: '5px',
                }}
                noValidate
                autoComplete="off"
                display='flex'
                flexDirection='column'
            >


                <TextField
                    color='secondary'
                    required
                    name='name'
                    error={false}
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    type='text'
                    sx={{
                        color:'red !important'
                    }}

                />

                <TextField
                    required
                    color='secondary'
                    name='company'
                    error={false}
                    id="standard-basic"
                    label="Company"
                    variant="standard"
                    type='text'
                />
               
           


                <Button
                    sx={{background:'linear-gradient(139deg,#8B3491,#5E30AF)',marginTop:'30px'}}
                    variant='contained'
                    type='submit'
                >
                    Enviar
                </Button>

            </Box>


        </>
    )
}

export default Form