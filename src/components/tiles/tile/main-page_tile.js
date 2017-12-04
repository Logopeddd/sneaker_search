import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image, Anchor } from 'grommet';

const MainPageTile = props => (
  <Tile className="main-page_tile" colorIndex="light-1">
    <Card
      size={{ width: { max: 'large' } }}
      responsive={false}
      thumbnail={<Image src={props.img} size="large" />}
      heading={
        <Heading tag="h2" align="center" uppercase>
          <Anchor path={`/catalog/${props.heading}`}>{props.heading}</Anchor>
        </Heading>
      }
    />
  </Tile>
);

MainPageTile.propTypes = {
  heading: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MainPageTile;
