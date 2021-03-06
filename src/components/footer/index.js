import React from 'react';
import { Footer as GrommetFooter, Menu, Anchor, ShopIcon } from 'grommet';

const Shops = [
  { key: '1', name: 'SNEAKERHEAD', url: 'https://sneakerhead.ru/' },
  { key: '2', name: 'AFEW', url: 'https://www.afew-store.com' },
  { key: '3', name: 'FOOTPATROL', url: 'https://www.footpatrol.com/' },
  { key: '4', name: 'FOOTSHOP', url: 'https://www.footshop.com' },
];

const Footer = () => (
  <GrommetFooter
    size="small"
    justify="between"
    pad={{ horizontal: 'medium' }}
    colorIndex="neutral-1"
  >
    <Menu size="small" direction="row" icon={<ShopIcon />} inline>
      {Shops.map(shop => (
        <Anchor key={shop.key} href={shop.url} label={shop.name} />
      ))}
    </Menu>
  </GrommetFooter>
);

export default Footer;
