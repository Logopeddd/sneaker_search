import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image, Anchor } from 'grommet';

import image from '../../assets/noImage.jpg';

const CatalogPageTile = props => (
  <Tile
    className="catalog-page_tile"
    size={{ width: { min: 'small' } }}
    colorIndex="light-1"
  >
    <Card
      className="catalog-page_tile_card"
      basis="full"
      thumbnail={<Image src={props.img || image} full="horizontal" />}
      label={props.brand}
      heading={
        <Heading tag="h4" uppercase>
          <Anchor path={`/catalog/${props.id}/detail`}>{props.model}</Anchor>
        </Heading>
      }
      description={`$${props.price}+`}
    />
  </Tile>
);

CatalogPageTile.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CatalogPageTile;
