import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import Section from "@components/Section"
import Experience from "@components/Web/Experience"

const Experiences = () => {
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

  const elements = useMemo(() => {
      return data.experiences.edges.filter(
        edge =>
          edge.node.frontmatter &&
          (edge.node.frontmatter.printable || edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid component={Box} display={edge.node.frontmatter.visible ? 'block' : 'none'} displayPrint={edge.node.frontmatter.printable ? 'block' : 'none'} xs={12} item key={edge.node.id}>
              <Experience {...edge.node} />
          </Grid>
      ))
  }, [data])
  return (
    <>
      <Box display='none' displayPrint='block'>
        <Section
          elements={elements}
          className="experiences"
          title={`Experience`}
          print={true}
          withProgress={elements.length > 2}
          gridProps={{
              direction: 'column',
              spacing: 1,
              alignItems: 'stretch',
              justify: 'flex-start'
          }}
        />
      </Box>
      <Box displayPrint='none'>
        <Section
          elements={elements}
          className="experiences"
          title={`Experiences`}
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

export default Experiences
