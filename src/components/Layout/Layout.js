import React from 'react'
import AuxComponent from '../../hoc/AuxComponent'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import "./Layout.css"
const Layout = (props) => {
  return (
    <AuxComponent>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
    </AuxComponent>
  )
}

export default Layout
