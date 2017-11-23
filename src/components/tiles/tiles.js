import React from 'react';
import PropTypes from 'prop-types';
import { Tiles } from 'grommet';

import './tiles.css';

const TilesComponent = props => {
  const Tile = props.tile;
  const { tiles } = props;
  const { selectable } = props;

  return (
    <Tiles selectable={selectable} flush={false} fill>
      {tiles.map(tile => <Tile {...tile} />)}
    </Tiles>
  );
};

TilesComponent.defaultProps = {
  selectable: false,
  tiles: [],
};

TilesComponent.propTypes = {
  selectable: PropTypes.bool,
  tile: PropTypes.func.isRequired,
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

export default TilesComponent;
