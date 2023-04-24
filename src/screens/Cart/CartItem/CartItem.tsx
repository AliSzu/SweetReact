import React, { FC } from "react";
import classes from "./CartItem.module.scss";

interface ICartItem {
}

const CartItem: FC<ICartItem> = (props: ICartItem) => {
  return (
    <li className={classes['cart-item']}>
        <div>
            <h2>Title</h2>
            <div className={classes.summary}>
                <span className={classes.price}>55.55</span>
                <span className={classes.amount}>x 2</span>
            </div>
        </div>
        <div className={classes.action}>
            <button>+</button>
            <button>-</button>
        </div>
    </li>
  );
};
export default CartItem;