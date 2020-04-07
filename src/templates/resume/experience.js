import React from "react"
import PropTypes from "prop-types"
import Section from "../../components/Section"
import Link from "../../components/link"

class ExperienceItem extends React.Component {
  render() {
    const { title, display_date, name, external_url } = this.props.frontmatter
    const { html } = this.props
    const LinkOrSpan = external_url ? (
      <Link
        className="title has-text-primary is-size-4"
        to={external_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </Link>
    ) : (
      <span className="title has-text-primary is-size-4">{name}</span>
    )
    return (
      <div className="is-parent column is-full">
        <article className="tile is-child box notification">
          <p>
            <span className="title is-size-4 is-block">
              {title}
              <span className="is-size-6"> &bull; </span>
              {LinkOrSpan}
            </span>
            <span className="subtitle is-size-5 is-block">{display_date}</span>
          </p>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </article>
      </div>
    )
  }
}

ExperienceItem.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    weight: PropTypes.number,
    printable: PropTypes.bool,
    visible: PropTypes.bool,
    date: PropTypes.string,
    display_date: PropTypes.string,
    external_url: PropTypes.string,
    name: PropTypes.string,
  }),
  html: PropTypes.string,
}

export default class ExperienceTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.experiences = this.props.elements.filter(
      edge => edge.node.frontmatter && edge.node.frontmatter.visible
    )
    this.experiences = this.experiences.map(edge => (
      <ExperienceItem key={edge.node.id} {...edge.node} />
    ))
  }

  render() {
    const title = <span>Experiences</span>
    return (
      <Section
        elements={this.experiences}
        title={title}
        withProgress={this.experiences.length > 2}
      />
    )
  }
}

ExperienceTemplate.propTypes = {
  elements: PropTypes.array,
}
