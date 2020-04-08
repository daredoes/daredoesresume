import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./section"
import Hobby from "./Hobby"

const Hobbies = () => {
  const data = useStaticQuery(graphql`
    query {
      hobbies: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "hobby" } } }
        sort: { fields: [frontmatter___weight, frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              title
              weight
              printable
              visible
              icon
              key
            }
            id
            html
          }
        }
      }
    }
  `)

  const elements = data.hobbies.edges.filter(
    edge => edge.node.frontmatter && edge.node.frontmatter.visible
  )
  const children = elements.map(edge => (
    <Hobby key={edge.node.id} {...edge.node} />
  ))

  return (
    <Section elements={children} className="hobbies" asRow title="Hobbies" />
  )
}

export default Hobbies
