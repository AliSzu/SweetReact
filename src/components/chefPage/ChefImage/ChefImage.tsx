import React, { FC } from "react";
import classes from "./ChefImage.module.scss";
import image from '../../../assets/img/chef.jpg'

const ChefImage = () => {
  return (
        <img src={image} className={classes['chef-image']}/>
  );
};
export default ChefImage;