import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Contact from "@components/Web/Contact"

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
  
  const elements = useMemo(() => {
      return data.contacts.edges.filter(
        edge =>
          edge.node.frontmatter &&
          (edge.node.frontmatter.printable || edge.node.frontmatter.visible)
      ).map((edge, index) => (
          <Grid component={Box} display={edge.node.frontmatter.visible ? 'block' : 'none'} displayPrint={edge.node.frontmatter.printable ? 'block' : 'none'} item key={edge.node.id}>
              <Contact index={index} {...edge.node} />
          </Grid>
      ))
  }, [data])
  return (
    <>
      <Box display='none' displayPrint='block'>
        <Section
          elements={elements}
          className="contacts"
          print={true}
          asRow={true}
          gridProps={{
              direction: 'row',
              spacing: 1
          }}
        />
      </Box>
      <Box displayPrint='none'>
        <Section
          elements={elements}
          className="contacts"
          title={`Contact`}
          gridProps={{
              direction: 'column',
              spacing: 1
          }}
        />
      </Box>
    </>
  )
}

Contacts.defaultProps = {
  print: false,
}

export default Contacts
