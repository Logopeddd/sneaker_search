import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Heading } from 'grommet';

const MainScreenComponent = props => (
  <Box
    pad={{ horizontal: 'large' }}
    direction="row"
    justify="center"
    align="center"
    colorIndex="light-2"
  >
    <Box basis="1/2">
      <Image src={props.wallpapers} fit="cover" />
    </Box>
    <Box
      basis="1/2"
      align="start"
      pad="small"
      size={{ width: { max: 'medium' } }}
    >
      <Heading uppercase>FIND YOUR KIKS ONLINE</Heading>
    </Box>
  </Box>
);

MainScreenComponent.propTypes = {
  wallpapers: PropTypes.string.isRequired,
};

export default MainScreenComponent;
