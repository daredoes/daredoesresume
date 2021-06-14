import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Education from "@components/Web/Education"

const Educations = () => {
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

  
  const elements = useMemo(() => {
      return data.educations.edges.filter(
        edge =>
          edge.node.frontmatter &&
          (edge.node.frontmatter.printable || edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid component={Box} display={edge.node.frontmatter.visible ? 'block' : 'none'} displayPrint={edge.node.frontmatter.printable ? 'block' : 'none'} item key={edge.node.id}>
              <Education {...edge.node} />
          </Grid>
      ))
  }, [data])
  return (
    <>
      <Box display='none' displayPrint='block'>
         <Section
          elements={elements}
          className="educations"
          title="Education"
          print={true}
          gridProps={{
              direction: 'column',
              spacing: 1
          }}
        />
      </Box>
      <Box displayPrint='none'>
        <Section
          elements={elements}
          className="educations"
          title="Education"
          gridProps={{
              direction: 'column',
              spacing: 1
          }}
        />
      </Box>
    </>
  )
}

export default Educations
