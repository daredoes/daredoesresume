import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Hobby from "@components/Resume/Hobby"
import Elements from '@components/Resume/Elements'

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

  const gridProps = {
      direction: 'row',
      justify: 'flex-start',
      alignItems: 'flex-start',
      spacing: 1
  }
  return (
    <Elements
     component={Hobby} 
     data={data.hobbies} 
     printedSectionProps={{
       title: "Hobbies",
       gridProps: gridProps
     }}
     sectionProps={{
       gridProps: gridProps,
        title: 'Hobbies'
     }}
    />
  )
}

export default Hobbies
