import React, { useEffect, useState } from "react";
import classes from "./ShopPreview.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopSlider from "../../components/ShopPreviewPage/ShopSlider/ShopSlider";
import Title from "../../components/common/Title/Title";
import { forwardRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppDispatch } from "../../store/store";
import { fetchItemsData } from "../../store/actions/item-actions";

interface IShopPreview {}

const ShopPreview = forwardRef<HTMLDivElement, IShopPreview>((props: IShopPreview, ref) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchItemsData()).finally(() => {
      setLoading(false);
  });
  }, [dispatch]);


  return (
    <div className={classes.shopContainer} ref={ref}>
      <div className="wrapper">
        <Title className={classes.title}>SWEETST SWEET</Title>
        {loading ? (<div className="loading"><CircularProgress/></div>) :
        <ShopSlider/> }
      </div>
    </div>
  );
});
export default ShopPreview;
