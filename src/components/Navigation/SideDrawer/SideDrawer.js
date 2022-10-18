import React from "react";
import AuxComponent from "../../../hoc/AuxComponent";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
const SideDrawer = (props) => {
  return (
    <AuxComponent>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={props.open ? "Open" : "Closed"}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </AuxComponent>
  );
};

export default SideDrawer;
