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
            <a href='/CertificadoIntroduccionLibeComandos'>
            <img  src='https://i.pinimg.com/originals/9a/8c/86/9a8c862466762aa381649db694604012.jpg'
                  title='Introduccion a la linea de comandos' alt='Introduccion a la linea de comandos' width={300}/>
            </a> 
            <a href='/CertificadoIntroduccionBackend'>
            <img  src='https://i.pinimg.com/originals/72/c0/1d/72c01d9d0723d34c1ca67064a0a5975f.jpg'
                  title='Introduccion al desarrollo Backend' alt='Introduccion al desarrollo Backend' width={300}/>
            </a> 
            <a href='/CertificadoPOO'>
            <img  src='https://i.pinimg.com/originals/f0/8d/ca/f08dca75f53ec9bd1d201dcde2e3e859.jpg'
                  title='Programacion orientada a objetos' alt='Programacion orientada a objetos' width={300}/>
            </a> 
            <a href='/CertificadoIntroduccionJavaSE'>
            <img  src='https://i.pinimg.com/originals/bb/d2/60/bbd2609053dad707bf9c61e44aa562f2.jpg'
                  title='Introduccion a Java SE' alt='Introduccion a Java SE' width={300}/>
            </a>
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
