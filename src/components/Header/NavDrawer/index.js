import PropTypes from "prop-types"
import React from "react"

import NavItems from "@components/Header/NavDrawer/NavItems"

import { makeStyles, useTheme } from "@material-ui/styles"
import { fade } from "@material-ui/core/styles/colorManipulator"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  modal: {
    "& > .MuiBackdrop-root": {
      backgroundColor: fade(theme.palette.secondary.main, 0.5),
    },
  },
}))

const NavDrawer = ({ open, onClose, items }) => {
  const classes = useStyles()

  const theme = useTheme()

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
        modal: classes.modal,
      }}
    >
      <List>
        <NavItems onClick={onClose} items={items} />
      </List>
    </Drawer>
  )
}

NavDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
}

NavDrawer.defaultProps = {
  open: false,
  onClose: () => {},
  items: [],
}

export default NavDrawer
