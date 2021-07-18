import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Skill from "@components/Resume/Skill"
import Elements from '@components/Resume/Elements'

const Skills = () => {

  const data = useStaticQuery(graphql`
    query {
      skills: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "skill" } } }
        sort: {
          fields: [frontmatter___weight, frontmatter___title]
          order: [ASC, ASC]
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
              icon
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
     component={Skill} 
     data={data.skills} 
     printedSectionProps={{
       title: "Skills & Software",
       gridProps: gridProps
     }}
     sectionProps={{
       gridProps: gridProps,
        title: "Skills & Buzz Words"
     }}
    />
  )
}

export default Skills
