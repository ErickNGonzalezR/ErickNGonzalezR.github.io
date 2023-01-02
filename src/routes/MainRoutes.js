import React from 'react';

import PublicPage from '../pages/Public';
import HomePage from '../pages/Home';
import Experiencia from '../pages/Experiencia';
import Contacto from '../pages/Contacto';
import Certificados from '../pages/Certificados';

import CertificadoGit from '../CerticatePage/CertificadoGit';
import CertificadoPython from '../CerticatePage/CertificadoPython';
import CertificadoIntroduccionLineaComandos from '../CerticatePage/CertificadoIntroduccionLineaComandos';
import CertificadoIntroduccionBackend from '../CerticatePage/CertificadoIntroduccionBackend';
import CertificadoPOO from '../CerticatePage/CertificadoPOO';
import CertificadoIntroduccionJavaSE from '../CerticatePage/CertificadoIntroduccionJavaSE';


const MainRoutes = [
  {
    path: '/',
    element: <PublicPage/>,
  },
  {
    path: 'home',
    element: <HomePage/>,
  },
  {
    path: 'experiencia',
    element: <Experiencia/>,
  },{
    path: 'contacto',
    element: <Contacto/>,
  },{
    path: 'certificados',
    element: <Certificados/>,
  },
  {
    path: 'CertificadoGit',
    element: <CertificadoGit/>,
  },
  {
    path: 'CertificadoPython',
    element: <CertificadoPython/>,
  },
  {
    path: 'CertificadoIntroduccionLineaComandos',
    element: <CertificadoIntroduccionLineaComandos/>,
  },
  {
    path: 'CertificadoIntroduccionBackend',
    element: <CertificadoIntroduccionBackend/>,
  },
  {
    path: 'CertificadoPOO',
    element: <CertificadoPOO/>,
  },
  {
    path: 'CertificadoIntroduccionJavaSE',
    element: <CertificadoIntroduccionJavaSE/>,
  },
];

export default MainRoutes;
