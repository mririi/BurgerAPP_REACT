import React from "react";
import AuxComponent from "../../../hoc/AuxComponent";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
const Modal = (props) => {
  return (
    <AuxComponent>
      <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
    </AuxComponent>
  );
};

export default Modal;
