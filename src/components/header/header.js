import React from 'react';
import { Box, Header, Title } from 'grommet';
import './header.css';

const HeaderComponent = () => (
  <Header separator="bottom" colorIndex="light-2-a" justify="center">
    <Box
      direction="row"
      flex="grow"
      pad={{ horizontal: 'medium' }}
      responsive={false}
    >
      <Title className="header-title">SNEAKERSEARCH</Title>
    </Box>
  </Header>
);

export default HeaderComponent;
