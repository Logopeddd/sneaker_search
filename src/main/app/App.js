import React from 'react';
import { App as GrommetApp } from 'grommet';
import 'grommet-css';

import HeaderComponent from '../../components/header/header';
import MainPage from '../main-page/main-page';
import './App.css';

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
