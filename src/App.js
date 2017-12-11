import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { App as GrommetApp } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'grommet-css';
import thunk from 'redux-thunk';

import reducers from './reducers/root';

import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import MainPage from './screens/main-page/main-page';
import CatalogPage from './screens/catalog-page/catalog-page';
import DetailPage from './screens/detail-page/detail-page';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GrommetApp className="app" centered={false}>
            <HeaderComponent />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/catalog" component={CatalogPage} />
              <Route
                exact
                path="/catalog/:department"
                component={CatalogPage}
              />
              <Route path="/catalog/:id/detail" component={DetailPage} />
            </Switch>
            <FooterComponent />
          </GrommetApp>
        </Router>
      </Provider>
    );
  }
}

export default App;
