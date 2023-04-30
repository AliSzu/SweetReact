import React, { FC } from "react";
import classes from "./CartSummary.module.scss";
import Modal from "../../components/modal/Modal";
import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { summaryActions } from "../../store/slices/summary-slice";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

interface ICartSummary {}

const CartSummary: FC<ICartSummary> = (props: ICartSummary) => {
  const product = useAppSelector((state) => state.summary.summaryItem);
  const cartTotalPrice = useAppSelector((state) => state.cart.totalPrice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hideSummaryHandler = () => {
    dispatch(summaryActions.hideSummary());
  };

  const checkoutHandler = () => {
    hideSummaryHandler();
    navigate("/cart");
  };

  return (
    <Modal>
      <div className={classes["summary-wrapper"]}>
      <Alert severity="success" className={classes.alert}>
          Item has been successfully added to your cart!
        </Alert>
        <div className={classes["summary-content"]}>
          <div className={classes["order-image-container"]}>
            <img
              src={product.item.imgSrc}
              className={classes["order-image"]}
            ></img>
          </div>
          <div className={classes["product-info"]}>
            <span className={classes["product-name"]}>
              <span className={classes["product-amount"]}>
                {product.quantity} x{" "}
              </span>
              {product.item.name}
            </span>
            <span className={classes["product-price"]}>
              ${product.totalPrice}
            </span>
            <div>
              <div className={classes["cart-total"]}>
                <span>Cart Total</span>
                <span>${cartTotalPrice}</span>
              </div>
            </div>
            <div className={classes["actions"]}>
              <button
                className={`btn ${classes["summary-btn"]}`}
                onClick={hideSummaryHandler}
              >
                Continue Shopping
              </button>
              <button
                className={`btn ${classes["summary-btn"]}`}
                onClick={checkoutHandler}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default CartSummary;
