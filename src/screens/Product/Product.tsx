import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/common/header/Header";
import ProductItem from "../../components/ProductPage/ProductItem/ProductItem";
import ProductDescription from "../../components/ProductPage/ProductDescription/ProductDescription";
import { useAppDispatch } from "../../store/store";
import { fetchItemById } from "../../store/actions/item-actions";
import { useAppSelector } from "../../store/store";
import { itemActions } from "../../store/slices/item-slice";
import CircularProgress from "@mui/material/CircularProgress";
import CartSummary from "../CartSummary/CartSummary";

interface IProduct {}

const Product: FC<IProduct> = (props: IProduct) => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  const [loading, setLoading] = useState(false);
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
        setLoading(true);
        dispatch(fetchItemById(id)).finally(() => {
          setLoading(false);
        });
      }
    }
  }, [product, id, dispatch]);

  return (
    <React.Fragment>
      {showSummary && <CartSummary />}
      <Header shopRef={null} chefRef={null} />
      {loading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : (
        <>
          <ProductItem />
          <ProductDescription />
        </>
      )}
    </React.Fragment>
  );
};
export default Product;
