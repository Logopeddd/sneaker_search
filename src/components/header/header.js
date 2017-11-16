import React from 'react';
import { Box, Header, Search, Title } from 'grommet';
import './header.css';

const HeaderComponent = () => (
  <Header
    className="header"
    colorIndex="grey-3-a"
    justify="center"
    size="small"
  >
    <Box
      direction="row"
      flex="grow"
      pad={{ horizontal: 'medium' }}
      responsive={false}
    >
      <Title>Logo</Title>
      <Box flex="grow" align="end" direction="column" responsive>
        <Search responsive />
      </Box>
    </Box>
  </Header>
);

export default HeaderComponent;
