import React from 'react';
import { connect } from 'react-redux';

import { Article } from 'grommet';

import ScrollToTopOnMount from '../components/scroll-to-top';

import wallpapers from '../assets/main.jpg';
import men from '../assets/men.png';
import women from '../assets/women.png';
import kids from '../assets/kids.png';

import MainScreenComponent from '../components/slide-show/slide-show';
import Tiles from '../components/tiles';
import MainPageTile from '../components/tiles/home-page_tile';
import ResponsiveCarousel from '../components/carousel/index';

const mainPageTiles = [
  { key: 'men', heading: 'men', img: men },
  { key: 'women', heading: 'women', img: women },
  { key: 'kids', heading: 'kids', img: kids },
];

const HomePage = () => (
  <Article className="screen-content" colorIndex="light-2">
    <ScrollToTopOnMount />
    <MainScreenComponent wallpapers={wallpapers} />
    <ResponsiveCarousel />
    <Tiles
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

export default connect(mapDispatchToProps)(HomePage);
