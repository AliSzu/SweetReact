import React, { FC } from "react";
import classes from "./Title.module.scss";

interface ITitle {
  children : React.ReactNode;
  className: string;
}

const Title: FC<ITitle> = ({children, className}) => {
  const classes = "titleName " + className;
  return (
        <h1 className={classes}>{children}</h1>
  );
};
export default Title;