import React, { FC, useEffect, useState } from "react";
import classes from "./OrderSummary.module.scss";
import { useAppSelector } from "../../../store/store";
import { useAppDispatch } from "../../../store/store";
import { cartActions } from "../../../store/slices/cart-slice";
import Alert from "@mui/material/Alert";

interface IOrderSummary {}

const OrderSummary: FC<IOrderSummary> = (props: IOrderSummary) => {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = Math.round(cart.totalPrice * 100) / 100;

  const itemDictionary = {
    Subtotal: `${totalPrice}`,
    Shipping: "Free",
  };
  const summaryItems = Object.entries(itemDictionary).map(([key, value]) => {
    return (
      <div className={classes["summary-wrapper"]} key={key}>
        <span className={classes["summary-title"]}>{key}</span>
        <span>{value}</span>
      </div>
    );
  });
  const btnClasses =
    cart.totalPrice > 0
      ? `btn ${classes["order-btn"]}`
      : `btn ${classes["order-btn"]} ${classes.disabled}`;

  const checkoutHandler = () => {
    dispatch(cartActions.checkoutCart());
    setCheckoutSuccess(true);
  };

  return (
    <React.Fragment>
      {checkoutSuccess && (
        <Alert severity="success" className={classes.alert}>
          Your Cart has been sucessfully checked out! Soon you will get your
          items
        </Alert>
      )}
      <div>
        <div className={classes.order}>
          <div className={classes.title}>Order Summary</div>
          <div className={classes.summary}>{summaryItems}</div>
          <div className={classes["total-container"]}>
            <div className={classes.total}>
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
        <button className={btnClasses} onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </React.Fragment>
  );
};
export default OrderSummary;
