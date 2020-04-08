import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./section"
import Experience from "./Experience"

const Experiences = ({ print }) => {
  const data = useStaticQuery(graphql`
    query {
      experiences: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "experience" } } }
        sort: {
          fields: [
            frontmatter___weight
            frontmatter___date
            frontmatter___title
          ]
          order: [ASC, DESC, ASC]
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              weight
              printable
              visible
              external_url
              key
              display_date
              name
            }
            id
            html
          }
        }
      }
    }
  `)

  const elements = data.experiences.edges.filter(
    edge =>
      edge.node.frontmatter &&
      (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible)
  )
  const children = elements.map(edge => (
    <Experience print={print} key={edge.node.id} {...edge.node} />
  ))
  return (
    <Section
      print={print}
      elements={children}
      className="experiences"
      title={`Experience${print ? "" : "s"}`}
      withProgress={children.length > 2}
    />
  )
}

Experiences.propTypes = {
  print: PropTypes.bool,
}

Experiences.defaultProps = {
  print: false,
}

export default Experiences
