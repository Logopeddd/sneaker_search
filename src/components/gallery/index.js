import React from 'react';
import PropTypes from 'prop-types';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = ({ items }) => {
  const images = items.map(item => ({
    original: item,
    thumbnail: item,
  }));

  return (
    <ImageGallery
      items={images}
      showNav={false}
      thumbnailPosition="left"
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
