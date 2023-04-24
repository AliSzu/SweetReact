import React, { FC } from "react";
import classes from "./BackgroundImage.module.scss";
import image from '../../../assets/img/pancake.jpg'

const BackgroundImage = () => {
  return (
        <img src={image} className={classes.image}/>
  );
};
export default BackgroundImage;