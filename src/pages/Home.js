import React from 'react';
import { Typography, Box, Table } from '@mui/material';
import Grid from '@mui/material/Grid';

class HomePage extends React.PureComponent {
  render() {
    return (
      <Box sx={{marginTop: -5, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Grid container spacing={1} maxWidth="sm" sx={{marginTop: 2,display: 'flex', flexDirection: 'column',}}>
          <Grid item xs={20}>
            <Typography variant="h4" color="inherit" component="h2" fontFamily="Comic Sans MS" align='center' >
              Erick Nicolas Gonzalez Rojas
            </Typography>
          </Grid>
          <Grid item xs={20}>
            <Typography variant="h6" color="inherit" component="h4" fontFamily="Comic Sans MS" align='right' >
              Informaciòn Personal
            </Typography>
          </Grid>
          <Grid item xs={20}>
            <Table>
              <tr>
                <td>Cedula:</td>
                <td>1023022845</td>
              </tr>
              <tr>
                <td>Genero</td>
                <td>Masculino</td>
              </tr>
              <tr>
                <td>Nacionalidad</td>
                <td>Colombia</td>
              </tr>
              <tr>
                <td>Fecha de Nacimiento</td>
                <td>24 julio de 1997 (25 años)</td>
              </tr>
              <tr>
                <td>Lugar de Nacimiento</td>
                <td>Bogota</td>
              </tr>
            </Table>
            <Grid item xs={20}>
            <Typography variant="h6" color="inherit" component="h4" fontFamily="Comic Sans MS" align='right' >
              Informaciòn Academica
            </Typography>
          </Grid>
          <Grid item xs={20}>
            <Table>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </Table>
          </Grid>
          </Grid>
        </Grid>
      </Box>      
    );
  }
}

export default HomePage;
