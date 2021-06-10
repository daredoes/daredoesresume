import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid'
import useDetectPrint from 'use-detect-print';

import Section from "@components/Section"
import Skill from "@components/Web/Skill"

const Skills = () => {

  const print = useDetectPrint()
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
          (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible)
      ).map(edge => (
          <Grid item key={edge.node.id}>
              <Skill {...edge.node} />
          </Grid>
      ))
  }, [data, print])

  const gridProps = {
      direction: 'row',
      justify: 'flex-start',
      alignItems: 'flex-start',
      spacing: 1
  }
  return (
    <Section
      elements={elements}
      className="skills"
      title="Skills &amp; Software"
      asRow
      gridProps={gridProps}
    />
  )
}

export default Skills
