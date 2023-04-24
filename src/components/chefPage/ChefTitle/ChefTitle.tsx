import React, { FC } from "react";
import classes from "./ChefTitle.module.scss";
import Title from "../../common/Title/Title";
const ChefTitle = () => {
  return (
    <div className={classes.title__wrapper}>
        <div className={classes.title__container}>
            <Title className={classes['title-chef']}>Chef Sweet Tooth</Title></div>
    </div>
  );
};
export default ChefTitle;
