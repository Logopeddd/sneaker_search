import React from 'react';
import { Box, Header as GrommetHeader, Title, Anchor, Search } from 'grommet';
import './header.css';

const Header = () => (
  <GrommetHeader
    className="header-component"
    colorIndex="light-1"
    justify="center"
    size="small"
    fixed
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
      <Box flex="grow" align="end">
        <Search size="small" placeHolder="Search" inline />
      </Box>
    </Box>
  </GrommetHeader>
);

export default Header;
