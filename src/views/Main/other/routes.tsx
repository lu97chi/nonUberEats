import React from 'react';
import Main from './Other';
import ParentRoute, { RoutesTypes } from '../../../components/ParentRoute';
import Increse from './increase';
import User from './User';

const Route2: RoutesTypes = [
  {
    path: '/other/fawh',
    Component: Main,
    main: true,
  },
  {
    path: '/other/increase',
    Component: Increse,
  },
  {
    path: '/other/:user',
    Component: User,
    exact: true,
  },
];

const OtherRoutes = () => <ParentRoute routes={Route2} />;

export default OtherRoutes;
