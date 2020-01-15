import React from 'react'
import { Button, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ButtonAppBarCollapse from './ButtonAppBarCollpase'
import Link from 'next/link'
import { useRouter } from 'next/router'

const styles = theme => ({
  root: {
    position: 'absolute',
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    margin: '10px',
    paddingLeft: '16px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent',
  },
})

const menuItems = [
  {
    title: 'Home',
    route: '/',
  },
  // {
  //   title: 'Blog',
  // },
]

const NextNavButton = ({ route, title }) => {
  const router = useRouter()
  if (!route) {
    route = `/${title.toLowerCase()}`
  }
  const active = route === router.route ? 'active' : ''
  return (
    <Link href={route}>
      <Button className={`nav-link port-navbar-link ${active}`}>{title}</Button>
    </Link>
  )
}

const NextNavMenuItem = ({ route, title }) => {
  const router = useRouter()
  if (!route) {
    route = `/${title.toLowerCase()}`
  }
  const active = route === router.route ? 'active' : ''
  return (
    <Link href={route}>
      <MenuItem className={`nav-link port-navbar-link ${active}`}>
        {title}
      </MenuItem>
    </Link>
  )
}

const AppBarCollapse = props => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      {menuItems.map(item => (
        <NextNavMenuItem title={item.title} route={item.route} key={item.title}>
          {item.title}
        </NextNavMenuItem>
      ))}
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      {menuItems.map(item => (
        <NextNavButton
          title={item.title}
          route={item.route}
          color="inherit"
          key={item.title}
        >
          {item.title}
        </NextNavButton>
      ))}
    </div>
  </div>
)

export default withStyles(styles)(AppBarCollapse)
