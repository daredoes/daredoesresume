import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./section"
import Skill from "./Skill"

const Skills = ({ print }) => {
  const data = useStaticQuery(graphql`
    query {
      skills: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "skill" } } }
        sort: {
          fields: [frontmatter___weight, frontmatter___title]
          order: [ASC, ASC]
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
              icon
            }
            id
            html
          }
        }
      }
    }
  `)

  const elements = data.skills.edges.filter(
    edge =>
      edge.node.frontmatter &&
      (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible)
  )
  const children = elements.map(edge => (
    <Skill print={print} key={edge.node.id} {...edge.node} />
  ))

  return (
    <Section
      print={print}
      elements={children}
      className="skills"
      asRow
      title="Skills &amp; Software"
    />
  )
}

Skills.propTypes = {
  print: PropTypes.bool,
}

Skills.defaultProps = {
  print: false,
}

export default Skills
