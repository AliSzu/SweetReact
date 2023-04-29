import React, { FC, RefObject, useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

interface IHeader {
  shopRef: RefObject<HTMLDivElement> | null;
  chefRef: RefObject<HTMLDivElement> | null;
}

const Header: FC<IHeader> = (props: IHeader) => {
  const cartQuantity = useAppSelector((state) => state.cart.quantity);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const navigate = useNavigate();

  const cartClasses = `${classes.headerList__cart} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const onClickScroll = (
    event: React.MouseEvent<HTMLElement>,
    ref: RefObject<HTMLDivElement>
  ) => {
    event.preventDefault();
    ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  return (
    <div className={classes.header}>
      <ul className={classes.headerList}>
        <li className={classes.header__logo} onClick={() => navigate("/")}>
          <b>SweetReact</b>
        </li>
        {props.shopRef && (
          <li
            className={classes.headerList__item}
            onClick={(event) => onClickScroll(event, props.shopRef!)}
          >
            Shop
          </li>
        )}
        {props.chefRef && (
          <li
            className={classes.headerList__item}
            onClick={(event) => onClickScroll(event, props.chefRef!)}
          >
            Chef
          </li>
        )}
        <li className={cartClasses} onClick={() => navigate("/cart")}>
          Cart
          <div className={classes["cart-Quantity"]}>{cartQuantity}</div>
        </li>
      </ul>
    </div>
  );
};
export default Header;
