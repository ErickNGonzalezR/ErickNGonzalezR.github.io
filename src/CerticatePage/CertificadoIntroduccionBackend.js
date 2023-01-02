import React from 'react';
import { Grid } from '@mui/material';
import {  Typography, Box } from '@mui/material';

class CertificadoIntroduccionBackend extends React.PureComponent {
  render() {
    return (
        <Box sx={{marginTop: -5, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column', alignItems:'Center',}}>
                <Grid item xs={20}>
                    <Typography variant="h4" color="inherit" component="h2" fontFamily="Comic Sans MS" align='center' >
                    Certificado de Introduccion de Backend
                    </Typography>
                </Grid>
                <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column',}}>
                <img  src='https://i.pinimg.com/originals/72/c0/1d/72c01d9d0723d34c1ca67064a0a5975f.jpg'
                  title='Introduccion al desarrollo Backend' alt='Introduccion al desarrollo Backend' width={700}/>
            </Grid>
            </Grid>
        </Box>  
    );
  }
}