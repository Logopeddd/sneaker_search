import React from 'react';
import PropTypes from 'prop-types';
import { Tiles } from 'grommet';

import './tiles.css';

const TilesComponent = props => {
  const Tile = props.tile;
  const { tiles, selectable, fill, flush, pad, margin } = props;
  return (
    <Tiles
      selectable={selectable}
      fill={fill}
      flush={flush}
      pad={pad}
      margin={margin}
    >
      {tiles.map(tile => <Tile key={tile.id} {...tile} />)}
    </Tiles>
  );
};

TilesComponent.defaultProps = {
  selectable: false,
  fill: false,
  flush: false,
  pad: 'none',
  margin: 'none',
  tiles: [],
};

TilesComponent.propTypes = {
  selectable: PropTypes.bool,
  fill: PropTypes.bool,
  flush: PropTypes.bool,
  pad: PropTypes.oneOfType([PropTypes.string, PropTypes.shape]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.shape]),
  tile: PropTypes.func.isRequired,
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

export default TilesComponent;
