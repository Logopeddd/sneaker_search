import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card, Image, Anchor } from 'grommet';

const CatalogPageTile = props => (
  <Tile className="catalog-tile" colorIndex="light-1">
    <Card
      thumbnail={<Image src={props.img} full="horizontal" />}
      label={props.brand}
      heading={
        <Heading tag="h3" uppercase>
          <Anchor
            path={{
              pathname: `/catalog/${props.id}/detail`,
              state: {
                name: props.name,
                brand: props.brand,
                img: props.img,
              },
            }}
          >
            {props.name}
          </Anchor>
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
