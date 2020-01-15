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

// import { AppBar, Toolbar, Button, Grid, Typography } from '@material-ui/core'

// const Nav = ({ className }) => {
//   return (
//     <AppBar className="port-navbar port-nav-base" position="static">
//       <Toolbar>
//         <Grid container direction="row" justify="space-between">
//           <Grid container item xs={10}>
//             <NextNavItem route="/" title="Home" />
//             {/* <NextNavItem title="Blog" /> */}
//           </Grid>
//           <Grid container item xs={2}>
//             <Button
//               className="apply-button"
//               size="large"
//               edge="start"
//               type="button"
//               variant="contained"
//               href="https://crosscountry.force.com/customer/s/applynow?nmlsId=1125281"
//             >
//               <Typography variant="h6">Apply Now!</Typography>
//             </Button>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Nav
