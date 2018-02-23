import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image, Anchor } from 'grommet';

const MainPageTile = props => (
  <Tile basis="1/3" className="main-page_tile" colorIndex="light-1">
    <Card
      pad={{ vertical: 'medium', horizontal: 'small' }}
      size={{ width: { max: 'large' } }}
      contentPad="none"
      thumbnail={<Image src={props.img} full="horizontal" />}
      heading={
        <Heading tag="h2" align="center" uppercase>
          <Anchor className="no-decoration" path={`/catalog/${props.heading}`}>
            {props.heading}
          </Anchor>
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
