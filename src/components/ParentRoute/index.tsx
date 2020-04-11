import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

type Props = {
  routes: RoutesTypes;
};

export type RoutesTypes = Array<{
  path: string;
  Component: any;
  main?: boolean;
  exact?: boolean;
}>;

const ParentRoute = ({ routes }: Props) => {
  console.log(routes);
  return (
    <Switch>
      {routes.map(({ path, Component, main, exact }) => {
        return (
          <Route
            key={`index-${path}`}
            path={path}
            exact={exact}
            component={Component}
          />
        );
      })}
    </Switch>
  );
};

export default ParentRoute;
