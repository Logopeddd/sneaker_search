import React from 'react';
import { Footer, Menu, Anchor, ShopIcon, Paragraph } from 'grommet';

const Shops = [
  { key: '1', name: 'SNEAKERHEAD', url: 'https://sneakerhead.ru/' },
  { key: '2', name: 'AFEW', url: 'https://www.afew-store.com' },
  { key: '3', name: 'FOOTPATROL', url: 'https://www.footpatrol.com/' },
  { key: '4', name: 'FOOTSHOP', url: 'https://www.footshop.com' },
  { key: '5', name: 'SNEAKERHEAD', url: 'https://sneakerhead.ru/' },
  { key: '6', name: 'AFEW', url: 'https://www.afew-store.com' },
  { key: '7', name: 'FOOTPATROL', url: 'https://www.footpatrol.com/' },
  { key: '8', name: 'FOOTSHOP', url: 'https://www.footshop.com' },
  { key: '9', name: 'SNEAKERHEAD', url: 'https://sneakerhead.ru/' },
  { key: '10', name: 'AFEW', url: 'https://www.afew-store.com' },
  { key: '11', name: 'FOOTPATROL', url: 'https://www.footpatrol.com/' },
  { key: '12', name: 'FOOTSHOP', url: 'https://www.footshop.com' },
];

const FooterComponent = () => (
  <Footer justify="between" pad={{ horizontal: 'medium' }}>
    <Menu direction="row" icon={<ShopIcon />} inline>
      {Shops.map(shop => (
        <Anchor key={shop.key} href={shop.url} label={shop.name} />
      ))}
    </Menu>
    <Paragraph>© 2017 Sneakersearch</Paragraph>
  </Footer>
);

export default FooterComponent;
