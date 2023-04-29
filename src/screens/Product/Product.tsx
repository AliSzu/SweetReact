import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/common/header/Header";
import ProductItem from "../../components/ProductPage/ProductItem/ProductItem";
import ProductDescription from "../../components/ProductPage/ProductDescription/ProductDescription";
import { useAppDispatch } from "../../store/store";
import { fetchItemById } from "../../store/actions/item-actions";
import { useAppSelector } from "../../store/store";
import { itemActions } from "../../store/slices/item-slice";
import Modal from "../../components/modal/Modal";
import CartSummary from "../CartSummary/CartSummary";

interface IProduct {}

const Product: FC<IProduct> = (props: IProduct) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.item.items);
  const showSummary = useAppSelector((state) => state.summary.show);

  useEffect(() => {
    if (product.length > 0) {
      const item = product.find((x: any) => x.id === id);
      dispatch(itemActions.setFocusItem(item));
    } else {
      if (id) {
        dispatch(fetchItemById(id));
      }
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      {showSummary && <CartSummary/>}
      <Header shopRef={null} chefRef={null} />
      <ProductItem />
      <ProductDescription />
    </React.Fragment>
  );
};
export default Product;
