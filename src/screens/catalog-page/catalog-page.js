import React from 'react';
import { connect } from 'react-redux';
import { Split, Article } from 'grommet';
import FilterSidebar from '../../components/filter-sidebar/filter-sidebar';
import TilesComponent from '../../components/tiles/tiles';
import CatalogPageTile from '../../components/tiles/tile/catalog-page_tile';

const items = [
  {
    key: '1',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
  {
    key: '2',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
  {
    key: '3',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
  {
    key: '4',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
  {
    key: '5',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
  {
    key: '6',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
  {
    key: '7',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
  {
    key: '8',
    img: 'https://goo.gl/RWPJEy',
    brand: 'nike',
    name: 'Air Mag',
    price: 45000,
  },
];

const CatalogPage = props => {
  let filter;
  if (props.visible) filter = <FilterSidebar />;
  return (
    <Split className="screen-content" priority="left" flex="left">
      <Article colorIndex="light-2-a" align="center">
        <TilesComponent tile={CatalogPageTile} tiles={items} />
      </Article>
      {filter}
    </Split>
  );
};

function mapStateToProps(state) {
  return {
    visible: state.visible,
  };
}

export default connect(mapStateToProps)(CatalogPage);
