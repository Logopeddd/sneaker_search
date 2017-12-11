import React from 'react';

class ScrollToTop extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
export default ScrollToTop;
