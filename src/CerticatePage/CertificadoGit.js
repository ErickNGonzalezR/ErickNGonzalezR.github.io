import React from 'react';
import { Grid } from '@mui/material';
import {  Typography, Box } from '@mui/material';

class CertificadoGit extends React.PureComponent {
  render() {
    return (
        <Box sx={{marginTop: -5, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column', alignItems:'Center',}}>
                <Grid item xs={20}>
                    <Typography variant="h4" color="inherit" component="h2" fontFamily="Comic Sans MS" align='center' >
                        Certificado de Git y GitHub
                    </Typography>
                </Grid>
                <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column',}}>
                    <img    src='https://i.pinimg.com/originals/5b/01/8a/5b018a19a82ce302595515050a7474e0.jpg' 
                            alt='Certificado de git y github' title='Certificado de git y github' width={700} />
                </Grid>
            </Grid>
        </Box>  
    );
  }
}

export default CertificadoGit;
