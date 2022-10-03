import React, { useState } from 'react'
import { Box, TextField, Button, Grid } from '@mui/material'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const Form = () => {
    const [state,setState] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
         setState(true);
        emailjs.sendForm('gmailMessage', 'template_eiljolj', e.target, '1143Z4KXHXG_eZIwK')

            .then((result) => {

                setState(false);
                Swal.fire('Mensaje Enviado');
                e.target.reset();

            }, (error) => {
                alert("error")
            });
    }


    return (
        <>
            <Grid
                onSubmit={handleSubmit}
                xs={12}
                p={4}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                }}
                noValidate
                autoComplete="off"
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
               
            >

                <ContactMailIcon fontSize='large' sx={{ color: '#5E30AF' }} />
                <TextField
                    color='secondary'
                    required
                    name='name'
                    error={false}
                    id="standard-basic"
                    label="Nombre"
                    variant="standard"
                    type='text'
                    sx={{
                        color: 'red !important',
                    }}
                   
                />

                <TextField
                    
                    color='secondary'
                    name='email'
                    error={false}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    required
                    autoComplete='true'
                />
                <TextField
                    required
                    color='secondary'
                    name='message'
                    error={false}
                    id="standard-basic"
                    label="Mensaje"
                    variant="standard"
                    type='text'
                    multiline
                    rows={3}
                />





                <Button
                    sx={{ background: 'linear-gradient(139deg,#8B3491,#5E30AF)', marginTop: '30px' }}
                    variant='contained'
                    type='submit'
                >
                    {
                        !state?'Enviar' : 'Enviando...'
                    }
                   
                </Button>

            </Grid>


        </>
    )
}

export default Form