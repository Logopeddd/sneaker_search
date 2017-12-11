import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image, Anchor } from 'grommet';

const CatalogPageTile = props => (
  <Tile
    className="catalog-page_tile"
    size={{ width: { min: 'small' } }}
    colorIndex="light-1"
  >
    <Card
      thumbnail={<Image src={props.img} full="horizontal" />}
      label={props.brand}
      heading={
        <Heading tag="h4" uppercase>
          <Anchor path={`/catalog/${props.id}/detail`}>{props.name}</Anchor>
        </Heading>
      }
      description={`${props.price}$`}
    />
  </Tile>
);

CatalogPageTile.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CatalogPageTile;
