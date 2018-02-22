import React from 'react';
import PropTypes from 'prop-types';
import { Tiles as GrommetTiles } from 'grommet';

import './tiles.css';

const Tiles = props => {
  const Tile = props.tile;
  const {
    tiles,
    selectable,
    fill,
    flush,
    pad,
    margin,
    keys,
    onTileClick,
  } = props;
  return (
    <GrommetTiles
      selectable={selectable}
      fill={fill}
      flush={flush}
      pad={pad}
      margin={margin}
    >
      {tiles.map(tile => (
        <Tile key={tile[keys]} onClick={onTileClick} {...tile} />
      ))}
    </GrommetTiles>
  );
};

Tiles.defaultProps = {
  selectable: false,
  fill: false,
  flush: false,
  pad: 'none',
  margin: 'none',
  tiles: [],
  keys: 'id',
};

Tiles.propTypes = {
  selectable: PropTypes.bool,
  fill: PropTypes.bool,
  flush: PropTypes.bool,
  pad: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  tile: PropTypes.func.isRequired,
  keys: PropTypes.string,
  tiles: PropTypes.arrayOf(PropTypes.shape),
};

export default Tiles;
