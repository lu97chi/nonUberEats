import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Main from './views/Main/root';
import notFound from './views/404';
import MainRoutes from './views/Main/routes';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainRoutes} />
      <Route component={notFound} />
    </Switch>
  );
}

export default App;
