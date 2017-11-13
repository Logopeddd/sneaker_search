import React from 'react';
import { Image, Box } from 'grommet';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logos from '../../assets/logos/logos';

const ResponsiveCarousel = () => {
  const settings = {
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
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

  return (
    <Box colorIndex="light-1" separator="horizontal">
      <Slider {...settings}>
        {logos.map(logo => (
          <Box pad={{ horizontal: 'large' }}>
            <Image src={logo} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ResponsiveCarousel;
