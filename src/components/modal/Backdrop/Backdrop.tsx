import React, { FC } from "react";
import classes from "./Backdrop.module.scss";
import { useAppDispatch } from "../../../store/store";
import { summaryActions } from "../../../store/slices/summary-slice";

interface IBackdrop {
}

const Backdrop: FC<IBackdrop> = () => {
    const dispatch = useAppDispatch();
    const hideSummaryHandler = () => {
        dispatch(summaryActions.hideSummary());
      };
    return <div className={classes.backdrop} onClick={hideSummaryHandler}></div>
}
export default Backdrop;