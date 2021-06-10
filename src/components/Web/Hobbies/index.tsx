import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Hobby from "@components/Web/Hobby"

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

  
  const elements = useMemo(() => {
      return data.hobbies.edges.filter(
        edge =>
          edge.node.frontmatter && edge.node.frontmatter.visible
      ).map(edge => (
          <Grid item key={edge.node.id}>
              <Hobby {...edge.node} />
          </Grid>
      ))
  }, [data])

  const gridProps = {
      direction: 'row',
      justify: 'flex-start',
      alignItems: 'flex-start',
      spacing: 1
  }
  return (
    <Section
      elements={elements}
      className="hobbies"
      title="Hobbies"
      asRow
      gridProps={gridProps}
    />
  )
}

export default Hobbies
