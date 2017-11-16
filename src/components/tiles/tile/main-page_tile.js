import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image } from 'grommet';

const MainPageTile = props => (
  <Tile colorIndex="light-1">
    <Card
      size={{ width: { msx: 'large' } }}
      responsive={false}
      thumbnail={<Image src={props.img} size="large" />}
      heading={
        <Heading tag="h2" align="center" uppercase>
          {props.heading}
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
