import React from 'react';
import { Box, Header, Title, Anchor } from 'grommet';
import './header.css';

const HeaderComponent = () => (
  <Header
    separator="bottom"
    colorIndex="light-2-a"
    justify="center"
    size="small"
  >
    <Box
      direction="row"
      flex="grow"
      pad={{ horizontal: 'medium' }}
      responsive={false}
    >
      <Title className="header-title">
        <Anchor path="/">SNEAKERSEARCH</Anchor>
      </Title>
    </Box>
  </Header>
);

export default HeaderComponent;
