import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Project from "@components/Web/Project"

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

  const elements = useMemo(() => {
      return data.projects.edges.filter(
        edge =>
          edge.node.frontmatter &&
          (edge.node.frontmatter.printable || edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid component={Box} display={edge.node.frontmatter.visible ? 'block' : 'none'} displayPrint={edge.node.frontmatter.printable ? 'block' : 'none'} item key={edge.node.id}>
              <Project {...edge.node} />
          </Grid>
      ))
  }, [data])
  return (
    <>
      {/* <Box display='none' displayPrint='block'>
        <Section
          elements={elements}
          className="projects"
          title="Projects &amp; Blog Posts"
          withProgress={elements.length > 2}
          gridProps={{
              direction: 'column',
              spacing: 1,
              alignItems: 'center',
              justify: 'center'
          }}
        />
      </Box> */}
      <Box displayPrint='none'>
        <Section
          elements={elements}
          className="projects"
          title="Projects &amp; Blog Posts"
          withProgress={elements.length > 2}
          gridProps={{
              direction: 'column',
              spacing: 1,
              alignItems: 'center',
              justify: 'center'
          }}
        />
      </Box>
    </>
  )
}

export default Projects
