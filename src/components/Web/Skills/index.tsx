import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Section from "@components/Section"
import Skill from "@components/Web/Skill"

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

  
  const elements = useMemo(() => {
      return data.skills.edges.filter(
        edge =>
          edge.node.frontmatter &&
          (edge.node.frontmatter.printable || edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid component={Box} display={edge.node.frontmatter.visible ? 'block' : 'none'} displayPrint={edge.node.frontmatter.printable ? 'block' : 'none'} item key={edge.node.id}>
              <Skill {...edge.node} />
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
    <>
      <Box display='none' displayPrint='block'>
        <Section
          elements={elements}
          className="skills"
          title="Skills &amp; Software"
          asRow
          print={true}
          gridProps={gridProps}
        />
      </Box>
      <Box displayPrint='none'>
        <Section
          elements={elements}
          className="skills"
          title="Skills &amp; Buzz Words"
          asRow
          gridProps={gridProps}
        />
      </Box>
    </>
  )
}

export default Skills
