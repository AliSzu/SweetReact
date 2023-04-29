import React, { FC, useEffect, useState } from "react";
import classes from "./CartItem.module.scss";
import Items from "../../../types/Items";
import ItemInput from "../ItemInput/ItemInput";

interface ICartItem {
  item: Items;
}

const CartItem: FC<ICartItem> = (props: ICartItem) => {
  const totalPrice = Math.round(props.item.totalPrice * 100) / 100;

  const itemDictionary = {
    "item-name": props.item.item.name,
    "item-price": <b>${props.item.item.price}</b>,
  };
  const itemElements = Object.entries(itemDictionary).map(([key, value]) => {
    return <div className={classes[`${key}`]} key={key}>{value}</div>;
  });

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.img}>
        <img src={props.item.item.imgSrc} className={classes["item-img"]} />
      </div>
      {itemElements}
      <div className={classes.item}>
        <ItemInput item={props.item.item} value={props.item.quantity} />
      </div>
      <div className={classes.item}>
        <b>${totalPrice}</b>
      </div>
    </li>
  );
};
export default CartItem;
