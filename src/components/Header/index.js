import PropTypes from "prop-types"
import React from "react"

import Link from "@components/Link"
import NavDrawer from "@components/Header/NavDrawer"
import NavItems from "@components/Header/NavItems"

import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [open, setOpen] = React.useState(false)

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  const items = []

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Grid
            container
            spacing={2}
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            {matches && items.length > 0 && (
              <Grid item md={1}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            )}
            <Grid item md={10} lg={12} style={{ flexGrow: 1 }}>
              <Grid
                container
                justify="center"
                alignContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h4" color="inherit">
                    <Link to="/">{siteTitle}</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {!matches && (
              <Grid item lg={12}>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <NavItems items={items} />
                </Grid>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <NavDrawer open={open} onClose={handleDrawerClose} items={items} />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
