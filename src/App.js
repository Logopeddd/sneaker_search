import React from 'react';
import { App as GrommetApp } from 'grommet';
import 'grommet-css';

import HeaderComponent from './components/header/header';
import MainPage from './screens/main-page/main-page';

class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        <HeaderComponent />
        <MainPage />
      </GrommetApp>
    );
  }
}

export default App;
