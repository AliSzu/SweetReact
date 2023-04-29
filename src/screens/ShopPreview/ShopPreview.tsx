import React, { FC, ReactNode, RefObject } from "react";
import classes from "./ShopPreview.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopSlider from "../../components/ShopPreviewPage/ShopSlider/ShopSlider";
import Title from "../../components/common/Title/Title";
import { forwardRef } from "react";

interface IShop {}

const Shop = forwardRef<HTMLDivElement, IShop>((props: IShop, ref) => {
  return (
    <div className={classes.shopContainer} ref={ref}>
      <div className="wrapper">
        <Title className={classes.title}>SWEETST SWEET</Title>
        <ShopSlider />
      </div>
    </div>
  );
});
export default Shop;
