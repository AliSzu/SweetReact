import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/common/header/Header";
import Product from "../../components/ShopPage/Product/Product";
import ProductDescription from "../../components/ShopPage/ProductDescription/ProductDescription";
import { useAppDispatch } from "../../store/store";
import { fetchItemById } from "../../store/slices/item-actions";
import { useAppSelector } from "../../store/store";
import { itemActions } from "../../store/slices/item-slice";

interface IShopPage {}

const ShopPage: FC<IShopPage> = (props: IShopPage) => {
  const { id } = useParams();
  const [matchindId, setMatchingId] = useState(false);
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.item.items);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (product.length > 0) {
      const item = product.find((x: any) => x.id === id);
      dispatch(itemActions.setFocusItem(item));
      setIsLoading(false);
    } else {
      if (id) {
        dispatch(fetchItemById(id));
        setIsLoading(false);
      }
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      {!isLoading && (
        <>
          <Header shopRef={null} chefRef={null} />
          <Product />
          <ProductDescription />
        </>
      )}
    </React.Fragment>
  );
};
export default ShopPage;
