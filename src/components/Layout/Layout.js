import React, { Component } from "react";
import AuxComponent from "../../hoc/AuxComponent";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
class Layout extends Component {
  state={
    showSideDrawer:true
  }
  sideDrawerClosedHandler=()=>{
    this.setState({showSideDrawer:false})
  }
  sideDrawerToggleHandler=()=>{
    this.setState((prevState)=>{return{showSideDrawer:!prevState.showSideDrawer}})
  }
  render() {
    return (
      <AuxComponent>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className="Content">{this.props.children}</main>
      </AuxComponent>
    );
  }
}

export default Layout;
