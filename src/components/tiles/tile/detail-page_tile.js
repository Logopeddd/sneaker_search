import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'grommet';

const DetailPageTile = props => (
  <Tile
    className="detail-page_tile"
    colorIndex="light-1"
    pad={{ horizontal: 'medium', vertical: 'small' }}
  >
    {props.size}
  </Tile>
);

DetailPageTile.propTypes = {
  size: PropTypes.string.isRequired,
};

export default DetailPageTile;
