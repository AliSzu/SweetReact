import React, { FC, useEffect, useState } from "react";
import { ScrollRestoration, useLocation, useParams } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { pathname } = useLocation();
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
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
    });
}, []);


  return (
    <React.Fragment>
      <ScrollRestoration/>
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
