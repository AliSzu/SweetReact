import React, { FC, useState, useEffect } from "react";
import classes from "./Product.module.scss";
import { useAppSelector } from "../../../store/store";

const Product  = () => {
    const product = useAppSelector((state) => state.item.focusItem);

    useEffect(() => {
      console.log(product)
    }, []);

  return (
    <div className={`wrapper ${classes["product-container"]}`}>
      <div className={classes["product-grid"]}>
        <img src={product.imgSrc} className={classes["product-img"]} />
        <div className={classes["product-info__container"]}>
          <section className={classes['product-title']}>{product.name}</section>
          <section className={classes["product-id"]}>
            Product ID: {product.id}
          </section>
          <section className={classes.price}>
            <b>{product.price}</b>
          </section>
          <section className={classes.price}>Input + - </section>
          <button className={`btn ${classes["product-btn"]}`}>
            <b>Add to Cart</b>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
