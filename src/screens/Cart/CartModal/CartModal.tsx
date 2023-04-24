import React, { FC } from "react";
import classes from "./Overlay.module.scss";
import Modal from "../../../components/common/modal/Modal";
import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";

interface ICartModal {
  onClose: () => void;
}

const CartModal: FC<ICartModal> = (props: ICartModal) => {
  return (
    <Modal>
      <CartSummary/>
    </Modal>
  );
};
export default CartModal;