import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Fab } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: '0',
      right: '0',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const ApplyButton = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fab
        variant="extended"
        className="apply-button"
        href="https://crosscountry.force.com/customer/s/applynow?nmlsId=1125281"
      >
        <SendIcon className={classes.extendedIcon} />
        Apply Now!
      </Fab>
    </div>
  )
}

export default ApplyButton
