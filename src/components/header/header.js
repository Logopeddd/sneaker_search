import React from 'react';
import { Box, Header, Search, Title } from 'grommet';

const HeaderComponent = () => (
  <Header colorIndex="neutral-4" justify="center" size="small">
    <Box
      direction="row"
      flex="grow"
      pad={{ horizontal: 'medium' }}
      size={{ width: { max: 'xxlarge' } }}
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
