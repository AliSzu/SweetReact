import React, { FC, useEffect, useState } from "react";
import Header from "../../components/common/header/Header";
import { useAppDispatch } from "../../store/store";
import classes from "./Cart.module.scss";
import Title from "../../components/common/Title/Title";
import CartList from "../../components/CartPage/CartList/CartList";
import { fetchCartData } from "../../store/actions/cart-actions";
import OrderSummary from "../../components/CartPage/OrderSummary/OrderSummary";
import { useAppSelector } from "../../store/store";
import { addCartItem } from "../../store/actions/cart-actions";

interface ICart {}

const Cart: FC<ICart> = (props: ICart) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(addCartItem(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      <Header shopRef={null} chefRef={null} />
      <div className={classes.container}>
        <div className={`wrapper ${classes["cart-wrapper"]}`}>
          <Title className={classes.title}>Your Cart</Title>
          <div className={classes["order-container"]}>
            <CartList />
            <OrderSummary/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Cart;
