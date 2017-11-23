import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image } from 'grommet';

const CatalogPageTile = props => (
  <Tile className="catalog-tile" colorIndex="light-1">
    <Card
      thumbnail={<Image src={props.img} />}
      label={props.brand}
      heading={
        <Heading tag="h3" uppercase>
          {props.name}
        </Heading>
      }
      description={`${props.price}$`}
    />
  </Tile>
);

CatalogPageTile.propTypes = {
  img: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CatalogPageTile;
