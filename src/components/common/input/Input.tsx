import React, { FC, RefObject, useRef, useState, forwardRef } from "react";
import classes from "./Input.module.scss";
import { useNavigate } from "react-router-dom";

interface IInput {
  input: any;
}

const Input = forwardRef<HTMLInputElement, IInput>((props: IInput, ref) => {
  const [value, setValue] = useState(1);

  const incrementHandler = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  const decrementHandler = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    let value = event.currentTarget.value
      ? parseInt(event.currentTarget.value)
      : 0;
    setValue(value);
  };
  return (
    <div className={classes.input}>
      <div className={classes["input-container"]}>
        <button className={`btn ${classes["input-btn"]}`} onClick={incrementHandler} type="button">+</button>
        <input
          {...props.input}
          value={value}
          onChange={handleChange}
          ref={ref}
        ></input>
        <button className={`btn ${classes["input-btn"]}`} onClick={decrementHandler} type="button"> - </button>
      </div>
    </div>
  );
});
export default Input;
