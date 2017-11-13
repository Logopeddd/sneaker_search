import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image } from 'grommet';

const MainPageTile = props => (
  <Tile basis="1/3">
    <Card
      full="horizontal"
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
