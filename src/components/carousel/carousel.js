import React from 'react';
import { Image, Box } from 'grommet';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
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
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const ResponsiveCarousel = () => (
  <Box colorIndex="light-2" separator="bottom">
    <Slider {...settings}>
      {logos.map(logo => (
        <Box
          className="carousel-item"
          key={logo.key}
          pad={{ horizontal: 'large' }}
        >
          <Image src={logo.src} />
          <Link
            to={{
              pathname: '/catalog',
              state: { brand: [logo.key] },
            }}
          />
        </Box>
      ))}
    </Slider>
  </Box>
);

export default ResponsiveCarousel;
