import React from 'react';
import { Box } from 'grommet';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

class RangeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 500 },
    };
  }
  render() {
    return (
      <Box pad="medium">
        <InputRange
          step={25}
          maxValue={500}
          minValue={0}
          value={this.state.value}
          formatLabel={value => `$${value}`}
          onChange={value => this.setState({ value })}
        />
      </Box>
    );
  }
}

export default RangeComponent;
