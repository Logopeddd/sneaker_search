import React from 'react';
import { Box, Header, Title, Anchor } from 'grommet';
import './header.css';

const HeaderComponent = () => (
  <Header
    className="header-component"
    colorIndex="light-1-a"
    justify="center"
    size="small"
  >
    <Box
      direction="row"
      flex="grow"
      pad={{ horizontal: 'xlarge' }}
      responsive={false}
    >
      <Title className="header-title">
        <Anchor className="no-decoration" path="/">
          SNEAKERSEARCH
        </Anchor>
      </Title>
    </Box>
  </Header>
);

export default HeaderComponent;
