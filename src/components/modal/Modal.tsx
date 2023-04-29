import React, { FC } from "react";
import classes from "./Modal.module.scss";

import ReactDOM from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import Overlay from "./Overlay/Overlay";

interface IModal {
    children: React.ReactNode;
}

const Modal: FC<IModal> = (props: IModal) => {
    const portalElement = document.getElementById('overlays')!;
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </React.Fragment>
    )
}
export default Modal;