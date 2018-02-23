import React from 'react';
import PropTypes from 'prop-types';
import { Tiles as GrommetTiles } from 'grommet';

import './tiles.css';

const Tiles = props => {
  const Tile = props.tile;
  const { tiles, selectable, fill, flush, pad, margin, keys } = props;
  return (
    <GrommetTiles
      selectable={selectable}
      fill={fill}
      flush={flush}
      pad={pad}
      margin={margin}
    >
      {tiles.map(tile => <Tile key={tile[keys]} {...tile} />)}
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

const { bool, oneOfType, string, shape, func, arrayOf } = PropTypes;

Tiles.propTypes = {
  selectable: bool,
  fill: bool,
  flush: bool,
  pad: oneOfType([string, shape()]),
  margin: oneOfType([string, shape()]),
  tile: func.isRequired,
  keys: string,
  tiles: arrayOf(shape),
};

export default Tiles;
