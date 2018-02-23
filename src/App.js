import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App as GrommetApp } from 'grommet';
import 'grommet-css';

import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import HomePage from './screens/home';
import CatalogPage from './screens/catalog';
import DetailViewPage from './screens/detail-view';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/catalog/:id/detail',
    exact: true,
    component: DetailViewPage,
  },
  {
    path: '/catalog',
    exact: false,
    component: CatalogPage,
  },
];

class App extends React.Component {
  render = () => (
    <GrommetApp className="app" centered={false}>
      <HeaderComponent />
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
      <FooterComponent />
    </GrommetApp>
  );
}

export default App;
