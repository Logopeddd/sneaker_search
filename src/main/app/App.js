import React from 'react';
import { App as GrommetApp } from 'grommet';
import '../../../node_modules/grommet-css';
import wallpapers from '../../assets/main.jpg';

import HeaderComponent from '../../components/header/header';
import MainScreenComponent from '../../components/mainScreen/mainScreen';
import TilesComponent from '../../components/tiles/tiles';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        <HeaderComponent />
        <MainScreenComponent wallpapers={wallpapers} />
        <TilesComponent />
      </GrommetApp>
    );
  }
}

export default App;
