import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Contact from "@components/Web/Contact"
import Elements from "@components/Web/Elements"

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
  
  return (
    <Elements
     component={Contact} 
     data={data.contacts} 
     printedSectionProps={{
       gridProps: {
        direction: 'row',
        spacing: 1
    },
    asRow: true
     }}
     sectionProps={{
       gridProps: {
              direction: 'column',
              spacing: 1
        },
        title: 'Contact'
     }}

    />
  )
}

Contacts.defaultProps = {
  print: false,
}

export default Contacts
