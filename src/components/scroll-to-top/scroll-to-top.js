import React from 'react';

class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render = () => null;
}
export default ScrollToTop;
