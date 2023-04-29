import React, { FC, useEffect, Suspense } from "react";
import classes from "./SliderItem.module.scss";

interface IShopItem {
  item: any
}

const ShopItem: FC<IShopItem> = (props: IShopItem) => {
  return (
    <div className={classes.slick__item}>
      <div className={classes["slick__item--grid"]}>
        <img src={props.item.imgSrc} className={classes['item-image']}/>
        {/* <div className={classes.item__image}></div> */}
        <div>
          <div className={classes.itemName}>{props.item.name}</div>
          <section className={classes.itemDescription}>
            {props.item.shortDesc}
          </section>
        </div>
        <div className={classes.itemNav}>
          <span>${props.item.price}</span>
        </div>
      </div>
    </div>
  );
};
export default ShopItem;
