import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


const LogoSlider = ({ logos }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-primary font-poppins font-bold text-2xl">MEIE KLIENDID & KOOSTÖÖPARTNERID</h1>
      <span className="h-1 w-full p-0.5 text-primary text-xl font-bold lg:w-1/3">__________________________________________________________________________________________________________________________________________________________________</span>
    <Slider {...settings} className="pt-5">
      {logos.map((logo, index) => (
        <div key={index} className="">
          <img src={logo} alt="logo" />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default LogoSlider;
