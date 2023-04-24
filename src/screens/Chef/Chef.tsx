import React, { FC } from "react";
import classes from "./Chef.module.scss";
import ChefImage from "../../components/chefPage/ChefImage/ChefImage";
import ChefTitle from "../../components/chefPage/ChefTitle/ChefTitle";
import { forwardRef } from "react";

interface IChef {}

const Chef = forwardRef<HTMLDivElement, IChef>((props: IChef, ref) => {
  return (
    <div className={classes.container__chef} ref={ref}>
      <div className={`wrapper ${classes.container__chef__wrapper}`}>
        <div className={classes["grid-chef"]}>
          <div className={classes.grid__col}>
            <ChefImage />
          </div>
          <div className={classes.grid__text}>
            <ChefTitle />
            <div className={classes.grid__text__description}>
              From decadent chocolate cakes to delicate macarons, Chef Sweet
              Tooth's creations are sure to satisfy any sweet tooth. Their
              passion for baking is evident in every dessert they create, their
              innovative approach to ingredients and flavors has earned them a
              loyal following of dessert lovers.
            </div>
            <button className={classes["recipe-btn"]}>
              LEARN HIS SECRET RECIPES!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Chef;
