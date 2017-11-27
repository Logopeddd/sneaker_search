import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App as GrommetApp } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'grommet-css';

import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import MainPage from './screens/main-page/main-page';
import CatalogPage from './screens/catalog-page/catalog-page';

const initialState = {
  visible: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return {
        visible: true,
      };
    case 'HIDE_SIDEBAR':
      return {
        visible: false,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
