import React from 'react';
import Main from './root';
import Sales from './sales';
import ParentRoute, { RoutesTypes } from '../../components/ParentRoute';
import OtherRoutes from './other/routes';

const Route2: RoutesTypes = [
  {
    path: '/root',
    Component: Main,
  },
  {
    path: '/sales',
    Component: Sales,
  },
  {
    path: '/other',
    Component: OtherRoutes,
  },
];

const MainRoutes = () => <ParentRoute routes={Route2} />;

export default MainRoutes;
