import React, { useState, useRef, useEffect } from "react";
import Main from "../../components/mainPage/Main/Main";
import Header from "../../components/common/header/Header";
import Chef from "../Chef/Chef";
import { addCartItem, fetchCartData } from "../../store/actions/cart-actions";
import { useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/store";
import ShopPreview from "../ShopPreview/ShopPreview";
function MainPage() {  
  const shopRef = useRef<HTMLDivElement>(null);
  const chefRef = useRef<HTMLDivElement>(null);
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
      <Header chefRef={chefRef} shopRef={shopRef} />
      <Main />
      <ShopPreview ref={shopRef}/>
      <Chef ref={chefRef} />
    </React.Fragment>
  );
}

export default MainPage;
