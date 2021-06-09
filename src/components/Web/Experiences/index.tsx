import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Experience from "@components/Web/Experience"

const Experiences = ({ print }: { print: boolean}) => {
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
          (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid item key={edge.node.id}>
              <Experience print={print} {...edge.node} />
          </Grid>
      ))
  }, [data])
  return (
    <Section
      elements={elements}
      className="experiences"
      title={`Experience${print ? "" : "s"}`}
      print={print}
      withProgress={elements.length > 2}
      gridProps={{
          direction: 'column',
          spacing: 1,
          alignItems: 'center',
          justify: 'center'
      }}
    />
  )
}

export default Experiences