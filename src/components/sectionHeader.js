import React from "react"
import PropTypes from "prop-types"

export default class SectionHeader extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div>
        <span className="section-header">&#47;&#47;&nbsp;{title}</span>
        <hr className="section-header" />
        {children}
      </div>
    )
  }
}

SectionHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}
