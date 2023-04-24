import React, { FC } from "react";
import classes from "./Backdrop.module.scss";

interface IBackdrop {
}

const Backdrop: FC<IBackdrop> = () => {
    return <div className={classes.backdrop}></div>
}
export default Backdrop;