import React from "react"
import PropTypes from "prop-types"

export default class SectionHeader extends React.Component {
  render() {
    const { title, children, print, className } = this.props
    const finalTitle = print ? title : <span>// {title}</span>
    return (
      <div>
        <span className={`section-header ${className}`}>{finalTitle}</span>
        <hr className="section-header" />
        {children}
      </div>
    )
  }
}

SectionHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  className: PropTypes.string,
  print: PropTypes.bool,
}

SectionHeader.defaultProps = {
  print: false,
}
