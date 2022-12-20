import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

class Certificados extends React.PureComponent {
  render() {
    return (
      <Box sx={{marginTop: -5, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column',}}>
          <Grid item xs={20}>
            <Typography variant="h4" color="inherit" component="h2" fontFamily="Comic Sans MS" align='center' >
              Certificados
            </Typography>
          </Grid>
          <Grid item xs={20}>
            <Typography variant="h6" color="inherit" component="h4" fontFamily="Comic Sans MS" align='right'>
              Gestor de Versiones
            </Typography>
          </Grid>
          <Grid item xs={20}>
           <Typography variant="h5" color="inherit" component="h3" fontFamily="Comic Sans MS" align='Center'>
             Git
            </Typography>
            <a href ='/CertificadoGit'>
              <img  src='https://i.pinimg.com/originals/5b/01/8a/5b018a19a82ce302595515050a7474e0.jpg' 
                  alt='Certificado de git y github' title='Certificado de git y github' width={300} />
            </a>
          </Grid> 
          <Grid item xs={20}>
            <Typography variant="h6" color="inherit" component="h4" fontFamily="Comic Sans MS" align='right'>
              Backend
            </Typography>
          </Grid>
          <Grid item xs={20}>
            <Typography variant="h5" color="inherit" component="h3" fontFamily="Comic Sans MS" align='Center'>
              JAVA
            </Typography>
          </Grid>
          <Grid item xs={20}>
            <Typography variant="h5" color="inherit" component="h3" fontFamily="Comic Sans MS" align='Center'>
              Phyton
            </Typography>
            <a href='/CertificadoPython'>
            <img  src='https://i.pinimg.com/originals/fb/86/df/fb86dfb36fa7d0626392e086ecdaa355.jpg'
                  title='Certificado de python' alt='Certificado de Python' width={300}/>
            </a>          
          </Grid>
        </Grid>
      </Box>  
    );
  }
}

export default Certificados;
