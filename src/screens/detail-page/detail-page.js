import React from 'react';
import {
  Article,
  Section,
  Box,
  Heading,
  Carousel,
  Image,
  Label,
  Value,
  Anchor,
} from 'grommet';
import PropTypes from 'prop-types';

const DetailPage = props => {
  const { location } = props;
  return (
    <Article colorIndex="light-2-a" pad={{ horizontal: 'xlarge' }}>
      <Heading uppercase tag="h4" margin="small">
        <Anchor path="/">home</Anchor> /{' '}
        <Anchor path="/catalog">catalog</Anchor> / {location.state.name}
      </Heading>
      <Heading align="center" strong uppercase tag="h4">
        {location.state.brand}
      </Heading>
      <Heading align="center" uppercase tag="h1">
        {location.state.name}
      </Heading>
      <Section direction="row">
        <Box basis="2/3">
          <Carousel>
            <Image src={location.state.img} />
            <Image src={location.state.img} />
            <Image src={location.state.img} />
          </Carousel>
        </Box>

        <Box basis="1/3" margin={{ left: 'large' }}>
          <Value value="$ 450" align="start" />
          <Label uppercase>sizes</Label>
        </Box>
      </Section>
    </Article>
  );
};

DetailPage.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default DetailPage;
