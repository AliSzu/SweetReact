import React, { FC } from "react";
import classes from "./Overlay.module.scss";

interface IOverlay {
  children: React.ReactNode;
}

const Overlay: FC<IOverlay> = (props: IOverlay) => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  );
};
export default Overlay;
