import React, { FC, RefObject, useRef } from "react";
import classes from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

interface IHeader {
  shopRef: RefObject<HTMLDivElement> | null,
  chefRef: RefObject<HTMLDivElement> | null,
}

const Header: FC<IHeader> = (props: IHeader) => {
  const navigate = useNavigate();

  const onClickScroll = (event: React.MouseEvent<HTMLElement>, ref: RefObject<HTMLDivElement>) => {
    event.preventDefault();
    ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.header}>
      <ul className={classes.headerList}>
        <li className={classes.header__logo} onClick={() => (navigate('/'))}>
          <b>SweetReact</b>
        </li>
        {props.shopRef && <li className={classes.headerList__item} onClick={(event) => onClickScroll(event, props.shopRef!)}>Shop</li>}
        {props.chefRef &&<li className={classes.headerList__item} onClick={(event) => onClickScroll(event, props.chefRef!)}>Chef</li>}
        <li className={classes.headerList__cart}>Cart</li>
      </ul>
    </div>
  );
};
export default Header;
