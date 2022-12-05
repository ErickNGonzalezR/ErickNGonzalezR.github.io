import React from 'react';

import PublicPage from '../pages/Public';
import HomePage from '../pages/Home';
import Experiencia from '../pages/Experiencia';
import Contacto from '../pages/Contacto';
import Certificados from '../pages/Certificados';
import CertificadoGit from '../CerticatePage/CertificadoGit';
import CertificadoPython from '../CerticatePage/CertificadoPython';

const MainRoutes = [
  {
    path: '/',
    element: <PublicPage />,
  },
  {
    path: 'home',
    element: <HomePage />,
  },
  {
    path: 'experiencia',
    element: <Experiencia />,
  },{
    path: 'contacto',
    element: <Contacto />,
  },{
    path: 'certificados',
    element: <Certificados />,
  },
  {
    path: 'CertificadoGit',
    element: <CertificadoGit />,
  },
  {
    path: 'CertificadoPython',
    element: <CertificadoPython />,
  },
];

export default MainRoutes;
