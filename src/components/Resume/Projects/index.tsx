import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "@components/Resume/Project"
import Elements from '@components/Resume/Elements'

const Projects = () => {
  const data = useStaticQuery(graphql`
  query {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
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

  return (
    <Elements
     gridProps={{xs: 12}}
     component={Project} 
     data={data.projects} 
     printedSectionProps={{
       title: "Projects & Blog Posts",
       gridProps: {
        direction: 'column',
        spacing: 1,
        alignItems: 'stretch',
        justify: 'flex-start'
    }
     }}
     sectionProps={{
       gridProps: {
        direction: 'column',
        spacing: 1,
        alignItems: 'center',
        justify: 'center'
    },
    withProgress: (x) => {
      return x > 2
    },
        title: "Projects & Blog Posts"
     }}
    />
  )
}

export default Projects
