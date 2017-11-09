import React from 'react';
import PropTypes from 'prop-types';
import { Tiles } from 'grommet';


const TilesComponent = props => {
  const Tile = props.tile;
  const { elements } = props;

  return (
    <Tiles
      pad={{ horizontal: 'large' }}
      selectable
      flush={false}
      fill
      colorIndex="light-2"
    >
      {elements.map(element => <Tile element={element} />)}
    </Tiles>
  );
};

TilesComponent.defaultProps = {
  elements: [],
};

TilesComponent.propTypes = {
  tile: PropTypes.element.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

export default TilesComponent;
