import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid'

export default class ResponsiveColumns extends React.Component {
  makeColumnsElementFromItems(items) {
    const length = items.length / 12
    return items.map(function(columnChildren, columnNumber) {
      return (
        <Grid
          key={`responseive-column-${columnNumber}`}
          item
          xs={12}
          md={6}
        >
          {columnChildren}
        </Grid>
      )
    })
  }

  render = () => {
    const { items } = this.props
    this.elements = this.makeColumnsElementFromItems(items)
    return <Grid justify='center' alignItems='flex-start' container spacing={5} direction='row'>{this.elements}</Grid>
  }
}

ResponsiveColumns.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
}
