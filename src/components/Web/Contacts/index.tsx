import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Section from "@components/Section"
import Contact from "@components/Web/Contact"
import useDetectPrint from 'use-detect-print';

const Contacts = () => {
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

  const print = useDetectPrint()

  
  const elements = useMemo(() => {
      return data.contacts.edges.filter(
        edge =>
          edge.node.frontmatter &&
          (edge.node.frontmatter.printable || edge.node.frontmatter.visible)
      ).map((edge, index) => (
          <Grid component={Box} displayPrint={edge.node.frontmatter.printable ? 'block' : 'none'} item key={edge.node.id}>
              <Contact index={index} {...edge.node} />
          </Grid>
      ))
  }, [data, print])
  return (
    <Section
      elements={elements}
      className="contacts"
      title={print ? null : `Contact`}
      print={print}
      asRow={print}
      gridProps={{
          direction: print ? 'row' : 'column',
          spacing: 1
      }}
    />
  )
}

Contacts.defaultProps = {
  print: false,
}

export default Contacts
