import React from 'react';
import { Image, Box, Anchor } from 'grommet';
import Slider from 'react-slick';

import { stringify } from 'qs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logos from '../../assets/logos/logos';

import './carousel.css';

const settings = {
  swipeToSlide: true,
  autoplay: true,
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const ResponsiveCarousel = () => (
  <Box colorIndex="light-2" separator="bottom" pad={{ horizontal: 'xlarge' }}>
    <Slider {...settings}>
      {logos.map(logo => (
        <Box
          className="carousel-item"
          key={logo.key}
          pad={{ horizontal: 'large' }}
        >
          <Image src={logo.src} />
          <Anchor
            path={{
              pathname: '/catalog',
              search: stringify({ brand: [logo.key] }),
            }}
          />
        </Box>
      ))}
    </Slider>
  </Box>
);

export default ResponsiveCarousel;
