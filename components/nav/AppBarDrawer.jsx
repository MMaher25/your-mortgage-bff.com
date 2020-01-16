import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, IconButton } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    margin: '10px',
    boxShadow: 'none',
  },
  menuButton: {
    color: 'white',
  },
}))

const AppBarDrawer = ({ menuItems }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpen(!open)
  }

  const fullList = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ title, route }, index) => (
          <Link href={route} key={title}>
            <ListItem>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={toggleDrawer()}>
        <MenuIcon className={classes.menuButton} />
      </IconButton>
      <Drawer anchor="top" open={open} onClose={toggleDrawer()}>
        {fullList()}
      </Drawer>
    </div>
  )
}

export default AppBarDrawer
