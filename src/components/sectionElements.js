import React from "react"
import PropTypes from "prop-types"

export default class SectionElements extends React.Component {
  render() {
    const { title, elements, asRow } = this.props
    return (
      <div className={`section ${asRow ? `as-row` : ``}`}>
        {title !== undefined ? <h4>{title}</h4> : null}
        <div className="section-elements">{elements}</div>
      </div>
    )
  }
}

SectionElements.propTypes = {
  elements: PropTypes.array.isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  asRow: PropTypes.bool,
}

SectionElements.defaultProps = {
  asRow: true,
}
