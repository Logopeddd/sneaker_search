import React from 'react';
import PropTypes from 'prop-types';
import { Tiles } from 'grommet';

const TilesComponent = props => {
  const Tile = props.tile;
  const { tiles } = props;

  return (
    <Tiles
      pad={{ horizontal: 'large' }}
      selectable
      flush={false}
      fill
      colorIndex="light-2"
    >
      {tiles.map(tile => (
        <Tile key={tile.key} heading={tile.heading} img={tile.img} />
      ))}
    </Tiles>
  );
};

TilesComponent.defaultProps = {
  tiles: [],
};

TilesComponent.propTypes = {
  tile: PropTypes.func.isRequired,
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

export default TilesComponent;
