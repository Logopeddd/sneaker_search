import React from 'react';
import { connect } from 'react-redux';

import { Article } from 'grommet';

import wallpapers from '../../assets/main.jpg';
import men from '../../assets/men.png';
import women from '../../assets/women.png';
import kids from '../../assets/kids.png';

import MainScreenComponent from '../../components/slide-show/slide-show';
import TilesComponent from '../../components/tiles/tiles';
import MainPageTile from '../../components/tiles/tile/main-page_tile';
import ResponsiveCarousel from '../../components/carousel/carousel';

const mainPageTiles = [
  { key: 'men', heading: 'men', img: men },
  { key: 'women', heading: 'women', img: women },
  { key: 'kids', heading: 'kids', img: kids },
];

const MainPage = () => (
  <Article className="screen-content" colorIndex="light-2">
    <MainScreenComponent wallpapers={wallpapers} />
    <ResponsiveCarousel />
    <TilesComponent
      selectable
      fill
      tile={MainPageTile}
      tiles={mainPageTiles}
      pad={{ horizontal: 'xlarge', vertical: 'medium' }}
    />
  </Article>
);

const mapDispatchToProps = state => ({
  sidebar: state.sidebar,
  filter: state.form.filter || {},
});

export default connect(mapDispatchToProps)(MainPage);
