import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./Section"
import Education from "./Education"

const Educations = ({ print }) => {
  const data = useStaticQuery(graphql`
    query {
      educations: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "education" } } }
        sort: {
          order: [ASC, DESC, ASC]
          fields: [
            frontmatter___weight
            frontmatter___graduation_date
            frontmatter___title
          ]
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              weight
              printable
              visible
              key
              graduation_date(formatString: "MMMM YYYY")
              display_date
            }
            id
            html
          }
        }
      }
    }
  `)

  const elements = data.educations.edges.filter(
    edge =>
      edge.node.frontmatter &&
      (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible)
  )
  const children = elements.map(edge => (
    <Education print={print} key={edge.node.id} {...edge.node} />
  ))
  return (
    <Section
      print={print}
      elements={children}
      className="educations"
      title="Education"
    />
  )
}

Educations.propTypes = {
  print: PropTypes.bool,
}

Educations.defaultProps = {
  print: false,
}

export default Educations
