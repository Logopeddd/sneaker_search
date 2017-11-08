import React from 'react';
import { Heading, Tiles, Tile, Card } from 'grommet';
import men from '../../assets/men.png';
import women from '../../assets/women.png';
import kids from '../../assets/kids.png';

const TilesComponent = () => (
  <Tiles
    pad={{ horizontal: 'large' }}
    selectable
    flush={false}
    fill
    colorIndex="light-2"
  >
    <Tile>
      <Card
        responsive={false}
        thumbnail={men}
        heading={
          <Heading tag="h2" align="center" uppercase>
            men
          </Heading>
        }
      />
    </Tile>
    <Tile>
      <Card
        responsive={false}
        thumbnail={women}
        heading={
          <Heading tag="h2" align="center" uppercase>
            women
          </Heading>
        }
      />
    </Tile>
    <Tile>
      <Card
        responsive={false}
        thumbnail={kids}
        heading={
          <Heading tag="h2" align="center" uppercase>
            kids
          </Heading>
        }
      />
    </Tile>
  </Tiles>
);
export default TilesComponent;
