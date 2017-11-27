import React from 'react';
import { App as GrommetApp } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'grommet-css';

import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import MainPage from './screens/main-page/main-page';
import CatalogPage from './screens/catalog-page/catalog-page';

class App extends React.Component {
  render() {
    return (
      <Router>
        <GrommetApp className="app" centered={false}>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/" component={CatalogPage} />
          </Switch>
          <FooterComponent />
        </GrommetApp>
      </Router>
    );
  }
}

export default App;
