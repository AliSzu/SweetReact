import React, { FC, useState, useEffect } from "react";
import classes from "./ProductItem.module.scss";
import { useAppSelector } from "../../../store/store";
import { useAppDispatch } from "../../../store/store";
import ProductForm from "../ProductForm/ProductForm";
import { addCartItem } from "../../../store/actions/cart-actions";
import { fetchCartData } from "../../../store/actions/cart-actions";

const ProductItem = () => {
  const product = useAppSelector((state) => state.item.focusItem);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(addCartItem(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className={`wrapper ${classes["product-container"]}`}>
      <div className={classes["product-grid"]}>
        <img src={product.imgSrc} className={classes["product-img"]} />
        <div className={classes["product-info__container"]}>
          <section className={classes["product-title"]}>{product.name}</section>
          <section className={classes["product-id"]}>
            Product ID: {product.id}
          </section>
          <section className={classes.price}>
            <b>{product.price}</b>
          </section>
          <ProductForm product={product} />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
