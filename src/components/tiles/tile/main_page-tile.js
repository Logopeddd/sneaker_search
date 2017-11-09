import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card } from 'grommet';

const MainPageTile = props => (
  <Tile>
    <Card
      responsive={false}
      thumbnail={props.img}
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
