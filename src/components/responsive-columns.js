import React from "react"
import PropTypes from "prop-types"

export default class ResponsiveColumns extends React.Component {
  makeColumnsElementFromItems(items) {
    return items.map(function(columnChildren, columnNumber) {
      return (
        <div
          key={`responseive-column-${columnNumber}`}
          className={`responsive-column responsive-column-${columnNumber}`}
        >
          {columnChildren}
        </div>
      )
    })
  }

  render = () => {
    const { items } = this.props
    this.elements = this.makeColumnsElementFromItems(items)
    return <div className="responsive-columns">{this.elements}</div>
  }
}

ResponsiveColumns.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
}
