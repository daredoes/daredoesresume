import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import Section from "./section"

class Project extends React.Component {
  render() {
    const { slug } = this.props.fields
    const {
      title,
      date,
      templateKey,
      tags,
      description,
    } = this.props.frontmatter
    const { html, excerpt, nonLinkTitle } = this.props
    const LinkOrTitle = nonLinkTitle ? (
      <span>{title}</span>
    ) : (
      <h4 className="card-title">
        {" "}
        <Link
          className="text-info"
          to={slug}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </Link>
      </h4>
    )

    const tagElements =
      tags !== undefined
        ? tags.map(tag => (
            <div key={tag + `tag`}>
              <Link to={`/tags/${kebabCase(tag)}/`}>
                <FontAwesomeIcon icon="tag" />
                &nbsp;{tag}
              </Link>
            </div>
          ))
        : null
    return nonLinkTitle ? (
      <Section
        elements={
          <div className="one-part-card">
            <div className="card-body">
              {description && (
                <div className="card-text dangerous-html">{description}</div>
              )}
              {description && <hr />}
              <div
                className="dangerous-html card-text"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
              <Section
                elements={tagElements}
                className="tags"
                normalHeader
                asRow
                title="Tags"
              />
            </div>
          </div>
        }
        className="project"
        title={
          <span>
            {LinkOrTitle}
            <wbr /> • 
            <wbr />
            {date}
          </span>
        }
      />
    ) : (
      <div className="one-part-card">
        <div className="card-body">
          {LinkOrTitle}
          <h5 className="card-subtitle h5 is-block">{date}</h5>
          <div
            className="dangerous-html card-text"
            dangerouslySetInnerHTML={{ __html: description || excerpt }}
          ></div>
          <Section
            elements={tagElements}
            className="tags"
            normalHeader
            asRow
            title="Tags"
          />
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  excerpt: PropTypes.string,
  id: PropTypes.string,
  fields: PropTypes.shape({
    slug: PropTypes.string,
  }),
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    templateKey: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  html: PropTypes.string,
  nonLinkTitle: PropTypes.bool,
}

Project.defaultProps = {
  nonLinkTitle: false,
}

export default Project
