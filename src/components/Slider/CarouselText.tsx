import React from "react";
import Slider, { Settings } from "react-slick";
import { Typography } from "@mui/material";

import "./style.css";

const CarouselText: React.FC = () => {
  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesPerRow: 1,
  };

  return (
    <Slider {...settings} className="mySlider">
      <div>
        <Typography>
          BIT R$ 23,62 <b className="styleText">-5,082</b>
        </Typography>
      </div>
      <div>
        <Typography>
          BIT R$ 23,62 <b className="styleText1">+7,082</b>
        </Typography>
      </div>
      <div>
        <Typography>
          BIT R$ 23,62 <b className="styleText">-5,082</b>
        </Typography>
      </div>
    </Slider>
  );
};

export default CarouselText;
