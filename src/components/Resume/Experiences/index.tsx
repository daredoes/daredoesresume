import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'

import Section from "@components/Section"
import Experience from "@components/Resume/Experience"
import Elements from "@components/Resume/Elements"

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


  return (
    <Elements
     gridProps={{xs: 12}}
     component={Experience} 
     data={data.experiences} 
     printedSectionProps={{
       title: "Experience",
       gridProps: {
        direction: 'column',
        spacing: 1,
        alignItems: 'stretch',
        justify: 'flex-start'
    }
     }}
     sectionProps={{
       gridProps: {
        direction: 'column',
        spacing: 1,
        alignItems: 'center',
        justify: 'center'
    },
    withProgress: (x) => {
      return x > 2
    },
        title: 'Experiences'
     }}
    />
  )
}

export default Experiences
