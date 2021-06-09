import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Contact from "@components/Web/Contact"

const Contacts = ({ print }: { print: boolean}) => {
  const data = useStaticQuery(graphql`
    query {
      contacts: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "contact" } } }
        sort: { fields: [frontmatter___weight, frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              title
              weight
              printable
              visible
              external_url
              icon
              key
            }
            id
            html
            excerpt
          }
        }
      }
    }
  `)

  
  const elements = useMemo(() => {
      return data.contacts.edges.filter(
        edge =>
          edge.node.frontmatter &&
          (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid item key={edge.node.id}>
              <Contact print={print} {...edge.node} />
          </Grid>
      ))
  }, [data])
  return (
    <Section
      elements={elements}
      className="contacts"
      title={print ? null : `Contact`}
      print={print}
      asRow={print}
      gridProps={{
          direction: 'column',
          spacing: 1
      }}
    />
  )
}

Contacts.defaultProps = {
  print: false,
}

export default Contacts
