import React from 'react';
import { Box } from 'grommet';

import wallpapers from '../../assets/main.jpg';
import men from '../../assets/men.png';
import women from '../../assets/women.png';
import kids from '../../assets/kids.png';

import MainScreenComponent from '../../components/slide-show/slide-show';
import TilesComponent from '../../components/tiles/tiles';
import MainPageTile from '../../components/tiles/tile/main-page_tile';

const mainPageTiles = [
  { key: 'men', heading: 'men', img: men },
  { key: 'women', heading: 'women', img: women },
  { key: 'kids', heading: 'kids', img: kids },
];

const MainPage = () => (
  <Box>
    <MainScreenComponent wallpapers={wallpapers} />
    <TilesComponent tile={MainPageTile} tiles={mainPageTiles} />
  </Box>
);

export default MainPage;
