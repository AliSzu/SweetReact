import React, { FC } from "react";
import classes from "./ProductDescription.module.scss";
import { useAppSelector } from "../../../store/store";

const ProductDescription = () => {
  const product = useAppSelector((state) => state.item.focusItem);
  let allergens
  if (product.allergens) {
    allergens = product.allergens.map((item: string) => (
      <li className={classes["list-item"]} key={"header"+item}>{item}</li>
    ));
  }
  return (
    <div className={classes["description-container"]}>
      <div className={`wrapper ${classes["description-grid"]}`}>
        <div className={classes.description}>
          <section className={classes["description-title"]}>
            {product.title}
          </section>
          <section className={classes["description-text"]}>
            {product.longDesc}
          </section>
        </div>
        <div className={classes.allergens}>
          <section className={classes["description-title"]}>ALLERGENS</section>
          <ul className={classes["allergens-list"]}>{allergens}</ul>
        </div>
      </div>
    </div>
  );
};
export default ProductDescription;
