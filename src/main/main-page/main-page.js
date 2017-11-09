import React from 'react';
import { Box } from 'grommet';

import wallpapers from '../../assets/main.jpg';
import men from '../../assets/men.png';
import women from '../../assets/women.png';
import kids from '../../assets/kids.png';

import MainScreenComponent from '../../components/mainScreen/mainScreen';
import TilesComponent from '../../components/tiles/tiles';
import MainPageTile from '../../components/tiles/tile/mian_page-tile';

const mainPageElements = [
  { heading: 'men', img: men },
  { heading: 'women', img: women },
  { heading: 'kids', img: kids },
];

const MainPage = () => (
  <Box>
    <MainScreenComponent wallpapers={wallpapers} />
    <TilesComponent tile={MainPageTile} elements={mainPageElements} />
  </Box>
);

export default MainPage;
