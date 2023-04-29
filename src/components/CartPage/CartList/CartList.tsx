import React, { FC, useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import classes from "./CartList.module.scss";
import { useAppSelector } from "../../../store/store";
import Items from "../../../types/Items";

interface ICartList {}

const CartList: FC<ICartList> = (props: ICartList) => {
  let item = useAppSelector((state) => state.cart.items);

  const cartItems = item.map((item: Items) => 
  <CartItem item={item} key={item.item.id}/>)

  return (
    <div>
      <div className={classes["cart-list-titles"]}>
        <span>Product</span>
        <span className={classes.title}>Price</span>
        <span className={classes.title}>Quantity</span>
        <span className={classes.title}>Total</span>
      </div>
      <ul className={classes["cart-list"]}>
        {cartItems}
        {cartItems.length === 0 && <p className={classes.message}>Try adding something to your cart!</p>}
      </ul>
    </div>
  );
};
export default CartList;
