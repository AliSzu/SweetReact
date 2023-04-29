import React, { FC, useState, useRef } from "react";
import classes from "./ProductForm.module.scss";
import Item from "../../../types/Item";
import { useAppDispatch } from "../../../store/store";
import { cartActions } from "../../../store/slices/cart-slice";
import { summaryActions } from "../../../store/slices/summary-slice";
import Input from "../../common/input/Input";

interface IProductForm {
  product: Item;
}

const ProductForm: FC<IProductForm> = ({ product }) => {
  const valueRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = Number(valueRef.current?.value);
    dispatch(cartActions.addItemToCart({ product, quantity: value }));
    dispatch(summaryActions.showSummary())
    dispatch(summaryActions.setSummaryItem({ product, quantity: value }))
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        input={{
          id: "amount_" + product.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
        }}
        ref={valueRef}
      />
      <button className={`btn ${classes["product-btn"]}`}>
        <b>Add to Cart</b>
      </button>
    </form>
  );
};
export default ProductForm;
