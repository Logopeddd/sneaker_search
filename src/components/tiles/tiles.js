import React from 'react';
import PropTypes from 'prop-types';
import { Tiles } from 'grommet';

import './tiles.css';

const TilesComponent = props => {
  const Tile = props.tile;
  const { tiles, selectable, fill, pad } = props;
  return (
    <Tiles selectable={selectable} fill={fill} flush={false} pad={pad}>
      {tiles.map(tile => <Tile {...tile} key={tile.id} />)}
    </Tiles>
  );
};

TilesComponent.defaultProps = {
  selectable: false,
  fill: false,
  tiles: [],
};

TilesComponent.propTypes = {
  selectable: PropTypes.bool,
  fill: PropTypes.bool,
  tile: PropTypes.func.isRequired,
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

export default TilesComponent;
