import React from 'react';
import { App as GrommetApp } from 'grommet';
import 'grommet-css';

import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import MainPage from './screens/main-page/main-page';

class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        <HeaderComponent />
        <MainPage />
        <FooterComponent />
      </GrommetApp>
    );
  }
}

export default App;
