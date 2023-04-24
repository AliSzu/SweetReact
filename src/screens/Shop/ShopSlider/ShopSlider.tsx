import React, { FC, useEffect, useState } from "react";
import classes from "./ShopSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopItem from "../SliderItem/SliderItem";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

interface IShopSlider {}


const ShopSlider: FC<IShopSlider> = () => {
  
  const items = useAppSelector((state) => state.item.items);
  const sliderItems = items.map((item: any) => (
    
    <Link to={`/products/${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
    <ShopItem item={item} />
    </Link>
  ));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className={classes.slick__list}>
      {sliderItems}
    </Slider>
  );
};
export default ShopSlider;
