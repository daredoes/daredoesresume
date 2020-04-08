import React from "react"
import PropTypes from "prop-types"
import SectionHeader from "./sectionHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "./link"

export default class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      progress: 100,
      max: props.elements.length * 100,
    }
  }

  scrollActive = forwards => {
    const max_length = this.props.elements.length
    const new_active =
      (this.state.active + (forwards ? 1 : -1) + max_length) % max_length
    this.setState({
      active: new_active,
    })
    setTimeout(this.raiseProgressUntilAtNewActive, 1)
  }

  raiseProgressUntilAtNewActive = () => {
    const isAtNewActive =
      this.state.progress * 1.1 > (this.state.active + 1) * 100
    const progress = isAtNewActive
      ? (this.state.active + 1) * 100
      : this.state.progress * 1.1
    this.setState({
      progress: progress,
    })
    if (!isAtNewActive) {
      setTimeout(this.raiseProgressUntilAtNewActive, this.state.progress * 0.08)
    }
  }

  makeScrollElement = forwards => {
    return (
      <div
        onClick={() => {
          this.scrollActive(forwards)
        }}
        className="col-1 text-center p-0 section-progress-buttons"
      >
        <FontAwesomeIcon
          size="3x"
          icon={forwards ? faCaretRight : faCaretLeft}
        />
      </div>
    )
  }

  render() {
    const {
      title,
      withProgress,
      elements,
      className,
      asRow,
      normalHeader,
      sectionHeaderClassName,
      print,
    } = this.props
    const progressBar = (
      <div className="row align-items-center m-0 p-0">
        {this.makeScrollElement(false)}
        <div className="col p-0">
          <div className="progress border">
            <div
              className="progress-bar progress-bar-striped "
              role="progressbar"
              aria-valuenow={this.state.progress}
              aria-valuemin="0"
              style={{
                width: `${(this.state.progress / this.state.max) * 100}%`,
              }}
              aria-valuemax={this.state.max}
            ></div>
          </div>
        </div>
        {this.makeScrollElement(true)}
      </div>
    )
    const hasTitle = !(title === undefined || title === null)
    const header = hasTitle ? (
      normalHeader ? (
        <h4 className={sectionHeaderClassName}>{title}</h4>
      ) : (
        <SectionHeader
          sectionHeaderClassName={sectionHeaderClassName}
          title={title}
          print={print}
        >
          {!print && withProgress && progressBar}
        </SectionHeader>
      )
    ) : null
    return (
      <div
        className={`section${
          className !== undefined ? ` section-${className}` : ``
        } ${asRow ? `as-row` : ``}`}
      >
        {header}
        <div className={`section-elements`}>
          {!print && withProgress ? elements[this.state.active] : elements}
        </div>
      </div>
    )
  }
}

Section.propTypes = {
  elements: PropTypes.array.isRequired,
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  withProgress: PropTypes.bool,
  asRow: PropTypes.bool,
  normalHeader: PropTypes.bool,
  sectionHeaderClassName: PropTypes.string,
  print: PropTypes.bool,
}

Section.defaultProps = {
  withProgress: false,
  asRow: false,
  normalHeader: false,
  print: false,
}
