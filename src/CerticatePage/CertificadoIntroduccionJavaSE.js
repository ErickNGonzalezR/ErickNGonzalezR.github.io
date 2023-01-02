import React from 'react';
import { Grid } from '@mui/material';
import {  Typography, Box } from '@mui/material';

class CertificadoIntroduccionJavaSE extends React.PureComponent {
  render() {
    return (
        <Box sx={{marginTop: -5, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column', alignItems:'Center',}}>
                <Grid item xs={20}>
                    <Typography variant="h4" color="inherit" component="h2" fontFamily="Comic Sans MS" align='center' >
                        Certificado de Basico de Python
                    </Typography>
                </Grid>
                <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column',}}>
                    <img    src='https://i.pinimg.com/originals/fb/86/df/fb86dfb36fa7d0626392e086ecdaa355.jpg' 
                            alt='Certificado de Basico de Python' title='Certificado de Basico de Python' width={700} />
                </Grid>
            </Grid>
        </Box>  
    );
  }
}