import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Education from "@components/Web/Education"

const Educations = ({ print }: { print: boolean}) => {
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
          (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid item key={edge.node.id}>
              <Education print={print} {...edge.node} />
          </Grid>
      ))
  }, [data])
  return (
    <Section
      elements={elements}
      className="educations"
      title="Education"
      print={print}
      gridProps={{
          direction: 'column',
          spacing: 1
      }}
    />
  )
}

export default Educations
