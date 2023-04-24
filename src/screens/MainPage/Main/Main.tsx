import React, { FC, useState } from "react";
import classes from "./Main.module.scss";
import Title from "../../../components/common/Title/Title";


interface IMain {}

const Main: FC<IMain> = () => {
  return (
    <div className={classes.main}>
      <div className={classes.main__content}>
        <Title className={classes.title}>Sweet Baking Shop</Title>
        <h1 className={classes["main__content--h1"]}>SUGARY HEAVEN</h1>
        <h2>IN YOUR MOUTH</h2>
        <button className={`btn ${classes.main__btn}`}>Shop</button>
      </div>
    </div>
  );
};
export default Main;
