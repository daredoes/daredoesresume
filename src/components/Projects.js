import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../section"
import Project from "./Project"


const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
        edges {
          node {
            excerpt(pruneLength: 500)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              tags
              weight
              printable
              visible
              description
            }
            html
          }
        }
      }
    }
  `)

  const elements = data.projects.edges.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.visible);
  const children = elements.map((edge) => <Project key={edge.node.id} {...edge.node} />);
  return (
    <Section elements={children} className="projects" title="Projects &amp; Blog Posts" withProgress={children.length > 2}/>
  )
}

export default Projects;
