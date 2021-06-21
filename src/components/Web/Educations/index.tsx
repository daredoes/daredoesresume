import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Education from "@components/Web/Education"
import Elements from '@components/Web/Elements'

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

  return (
    <Elements
     gridProps={{xs: 12}}
     component={Education} 
     data={data.educations} 
     printedSectionProps={{
       title: "Education",
       gridProps: {
        direction: 'column',
        alignItems: 'stretch',
        justify: 'flex-start',  
        spacing: 1
       }
     }}
     sectionProps={{
       gridProps: {
              direction: 'column',
              spacing: 1
        },
        title: 'Education'
     }}

    />
  )
}

export default Educations
