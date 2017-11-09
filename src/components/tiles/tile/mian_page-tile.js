import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tile, Card } from 'grommet';

const MainPageTile = props => {
  const { element } = props;
  return (
    <Tile>
      <Card
        responsive={false}
        thumbnail={element.img}
        heading={
          <Heading tag="h2" align="center" uppercase>
            {element.heading}
          </Heading>
        }
      />
    </Tile>
  );
};

MainPageTile.defaultProps = {
  element: {},
};

MainPageTile.propTypes = {
  element: PropTypes.shape({
    heading: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default MainPageTile;
