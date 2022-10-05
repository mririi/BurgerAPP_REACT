import React from 'react'
import AuxComponent from '../../hoc/AuxComponent'
import "./Layout.css"
const Layout = (props) => {
  return (
    <AuxComponent>
    <div>
      toolbar,sidebar,backdrop
    </div>
    <main className="Content">{props.children}</main>
    </AuxComponent>
  )
}

export default Layout
