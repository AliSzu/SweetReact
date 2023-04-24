import React, { useState, useRef, useEffect } from "react";
import Main from "./Main/Main";
import Header from "../../components/common/header/Header";
import Shop from "../Shop/Shop/Shop";
import Chef from "../Chef/Chef";
import CartModal from "../Cart/CartModal/CartModal";
import classes from "./MainPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../../store/slices/item-actions";
import { useAppDispatch } from "../../store/store";
import { ScrollRestoration } from "react-router-dom";

function MainPage() {
  const shopRef = useRef<HTMLDivElement>(null);
  const chefRef = useRef<HTMLDivElement>(null);
  const [cartSummary, setCartSummary] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(fetchCartData());
  }, []);

  return (
    <React.Fragment>
      {cartSummary && <CartModal onClose={() => setCartSummary(false)} />}
      <Header chefRef={chefRef} shopRef={shopRef} />
      <Main />
      <Shop ref={shopRef} />
      <Chef ref={chefRef} />
      <ScrollRestoration/>
    </React.Fragment>
  );
}

export default MainPage;
