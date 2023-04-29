import React, { FC, useEffect, useState } from "react";
import classes from "./ItemInput.module.scss";
import { useAppDispatch } from "../../../store/store";
import { cartActions } from "../../../store/slices/cart-slice";
import Item from "../../../types/Item";

interface IItemInput {
  value: number;
  item: Item
}

const ItemInput: FC<IItemInput> = (props: IItemInput) => {
    const dispatch = useAppDispatch();
    const product = props.item;
    const increaseQuantity = () => {
        dispatch(cartActions.addItemToCart({product, quantity: 1}))
    }

    const decreaseQuantity = () => {
        const product = props.item;
        dispatch(cartActions.removeItemFromCart({product}))
    }
  return (
      <div className={classes.item}>
        <button className={`btn ${classes["value-btn--inc"]}`} onClick={increaseQuantity}>+</button>
        <span className={classes.value}>{props.value}</span>
        <button className={`btn ${classes["value-btn--dec"]}`} onClick={decreaseQuantity}>-</button>
      </div>
  );
};
export default ItemInput;
