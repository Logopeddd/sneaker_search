import React from 'react';
import { App } from 'grommet';
import '../../../node_modules/grommet-css';
import wallpapers from '../../assets/main.jpg';

import HeaderComponent from '../../components/header/header';
import MainScreenComponent from '../../components/mainScreen/mainScreen';
import TilesComponent from '../../components/tiles/tiles';
import './App.css';

class _App extends React.Component {
  render() {
    return (
      <App centered={false}>
        <HeaderComponent />
        <MainScreenComponent wallpapers={wallpapers} />
        <TilesComponent />
      </App>
    );
  }
}

export default _App;
