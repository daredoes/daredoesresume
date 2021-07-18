import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import Link from "@components/Link"

import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListIcon from "@material-ui/icons/ViewList"
import Icon from "@material-ui/core/Icon"

const NavItems = ({ items, onClick }) => {
  const [data, setData] = useState([])

  const renderData = (items) => {
    return items.map((item) => renderDataForItem(item))
  }

  const renderDataForItem = ({ value, to, icon, iconOther, ...other }) => {
    return (
      <Link to={to} key={value} {...other} onClick={onClick}>
        <ListItem button>
          <ListItemIcon>
            <Icon {...iconOther}>{icon || "link"}</Icon>
          </ListItemIcon>
          <ListItemText>{value}</ListItemText>
        </ListItem>
      </Link>
    )
  }

  useEffect(() => {
    const newData = renderData(items)
    setData(newData)
  }, [items])

  return <>{data}</>
}

NavItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.string,
      iconOther: PropTypes.object,
    })
  ),
  onClick: PropTypes.func,
}

NavItems.defaultProps = {
  items: [],
  onClick: () => {},
}

export default NavItems
