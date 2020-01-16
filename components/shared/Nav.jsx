import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AppBarCollapse from '../nav/AppBarCollapse'

const ButtonAppBar = () => {
  return (
    <AppBar className="port-navbar port-nav-base" position="static">
      <Toolbar>
        <img className="square-logo" src="/images/square-logo-dark.png" />
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar
