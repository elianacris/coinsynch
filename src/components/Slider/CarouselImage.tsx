import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

import "./style.css";
import image1 from "../../assets/imageCarousel/image1.png";
import image2 from "../../assets/imageCarousel/image2.png";
import image3 from "../../assets/imageCarousel/image3.png";

const images = [image1, image2, image3];

const CarouselImage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: scrollPosition / 500,
  };

  return (
    <Slider {...settings} className="mySliderImage">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </Slider>
  );
};

export default CarouselImage;
