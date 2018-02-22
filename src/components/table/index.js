import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableRow, Value, Anchor, Label } from 'grommet';

const TableComponent = ({ shops }) => (
  <Table>
    <thead>
      <tr>
        <th>Price</th>
        <th>Shop</th>
      </tr>
    </thead>
    <tbody>
      {shops.map(shop => (
        <TableRow key={shop.name}>
          <td>
            <Value size="small" value={`$${shop.price}`} />
          </td>
          <td className="secondary">
            <Anchor
              href={shop.url}
              target="_blank"
              label={<Label uppercase>{shop.name}</Label>}
            />
          </td>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

TableComponent.defaultProps = {
  shops: [],
};

TableComponent.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
    }),
  ),
};

export default TableComponent;
